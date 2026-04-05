import { useEffect } from 'react';

const SCROLL_THRESHOLDS = [25, 50, 75, 90];

function isProductionAnalyticsEnabled() {
  return !import.meta.env.DEV && typeof window !== 'undefined' && typeof window.gtag === 'function';
}

function collectAnalyticsParams(element) {
  return Array.from(element.attributes).reduce((params, attribute) => {
    if (!attribute.name.startsWith('data-analytics-') || attribute.name === 'data-analytics-event') {
      return params;
    }

    const key = attribute.name.replace('data-analytics-', '').replaceAll('-', '_');
    params[key] = attribute.value;
    return params;
  }, {});
}

function getTimeBucket(seconds) {
  if (seconds <= 10) {
    return '0-10s';
  }
  if (seconds <= 30) {
    return '10-30s';
  }
  if (seconds <= 60) {
    return '30-60s';
  }
  if (seconds <= 180) {
    return '60-180s';
  }
  return '180s+';
}

export function trackEvent(eventName, params = {}) {
  if (!isProductionAnalyticsEnabled()) {
    return;
  }

  window.gtag('event', eventName, params);
}

export function trackPageView({ pagePath, pageTitle }) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
}

export function usePageAnalytics({ pagePath, pageTitle, sectionIds = [] }) {
  useEffect(() => {
    document.title = pageTitle;
    trackPageView({ pagePath, pageTitle });
  }, [pagePath, pageTitle]);

  useEffect(() => {
    if (!isProductionAnalyticsEnabled()) {
      return undefined;
    }

    let hasSent = false;
    const startedAt = Date.now();

    const sendEngagement = (reason) => {
      if (hasSent) {
        return;
      }

      hasSent = true;
      const secondsOnPage = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
      trackEvent('page_engagement_custom', {
        page_path: pagePath,
        page_title: pageTitle,
        seconds_on_page: secondsOnPage,
        time_bucket: getTimeBucket(secondsOnPage),
        trigger: reason,
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendEngagement('hidden');
      }
    };

    const handlePageHide = () => {
      sendEngagement('pagehide');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      sendEngagement('unmount');
    };
  }, [pagePath, pageTitle]);

  useEffect(() => {
    if (!isProductionAnalyticsEnabled()) {
      return undefined;
    }

    const seenThresholds = new Set();

    const sendScrollDepth = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScrollable = documentHeight - viewportHeight;

      if (maxScrollable <= 0) {
        return;
      }

      const percent = Math.round((scrollTop / maxScrollable) * 100);
      for (const threshold of SCROLL_THRESHOLDS) {
        if (percent >= threshold && !seenThresholds.has(threshold)) {
          seenThresholds.add(threshold);
          trackEvent('scroll_depth', {
            page_path: pagePath,
            percent,
            threshold,
          });
        }
      }
    };

    window.addEventListener('scroll', sendScrollDepth, { passive: true });
    sendScrollDepth();

    return () => {
      window.removeEventListener('scroll', sendScrollDepth);
    };
  }, [pagePath]);

  useEffect(() => {
    if (!isProductionAnalyticsEnabled()) {
      return undefined;
    }

    const handleClick = (event) => {
      const target = event.target instanceof Element ? event.target.closest('[data-analytics-event]') : null;
      if (!target) {
        return;
      }

      const eventName = target.getAttribute('data-analytics-event');
      if (!eventName) {
        return;
      }

      trackEvent(eventName, {
        page_path: pagePath,
        ...collectAnalyticsParams(target),
      });
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pagePath]);

  useEffect(() => {
    if (!isProductionAnalyticsEnabled() || sectionIds.length === 0 || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const seenSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seenSections.has(entry.target.id)) {
            continue;
          }

          seenSections.add(entry.target.id);
          trackEvent('section_view', {
            page_path: pagePath,
            section_id: entry.target.id,
          });
        }
      },
      {
        threshold: 0.6,
      },
    );

    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [pagePath, sectionIds]);
}
