import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DownloadsPage from './DownloadsPage';
import PrivacyPage from './PrivacyPage';
import SupportPage from './SupportPage';
import TermsPage from './TermsPage';
import { usePageAnalytics } from './analytics';
import './styles.css';

const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

const pages = {
  '/': {
    component: App,
    title: 'Knob16 | iPhone MIDI Controller for Ableton, Logic Pro, and More',
    sectionIds: ['hero', 'features', 'deep-dive', 'demo', 'pricing', 'early-access', 'faq', 'footer'],
  },
  '/downloads': {
    component: DownloadsPage,
    title: 'Downloads | Knob16',
  },
  '/privacy': {
    component: PrivacyPage,
    title: 'Privacy Policy | Knob16',
  },
  '/support': {
    component: SupportPage,
    title: 'Support | Knob16',
  },
  '/terms': {
    component: TermsPage,
    title: 'Terms & Conditions | Knob16',
  },
};

function AnalyticsRoot({ component: Component, pagePath, pageTitle, sectionIds = [] }) {
  usePageAnalytics({ pagePath, pageTitle, sectionIds });
  return <Component />;
}

const currentPage = pages[pathname] ?? pages['/'];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnalyticsRoot
      component={currentPage.component}
      pagePath={pathname}
      pageTitle={currentPage.title}
      sectionIds={currentPage.sectionIds}
    />
  </React.StrictMode>,
);
