import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DownloadsPage from './DownloadsPage';
import PrivacyPage from './PrivacyPage';
import SupportPage from './SupportPage';
import TermsPage from './TermsPage';
import { usePageAnalytics } from './analytics';
import { normalizePathname, pages } from './siteRoutes';
import './styles.css';

const pathname = normalizePathname(window.location.pathname);
const componentMap = {
  home: App,
  downloads: DownloadsPage,
  privacy: PrivacyPage,
  support: SupportPage,
  terms: TermsPage,
};

function AnalyticsRoot({ component: Component, pagePath, pageTitle, pageDescription, ogImage, sectionIds = [], initialSectionId }) {
  usePageAnalytics({ pagePath, pageTitle, pageDescription, ogImage, sectionIds });
  return <Component initialSectionId={initialSectionId} />;
}

const currentPage = pages[pathname] ?? pages['/'];
const CurrentComponent = componentMap[currentPage.component];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnalyticsRoot
      component={CurrentComponent}
      pagePath={pathname}
      pageTitle={currentPage.title}
      pageDescription={currentPage.description}
      ogImage={currentPage.ogImage}
      sectionIds={currentPage.sectionIds}
      initialSectionId={currentPage.initialSectionId}
    />
  </React.StrictMode>,
);
