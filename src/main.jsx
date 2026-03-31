import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DownloadsPage from './DownloadsPage';
import PrivacyPage from './PrivacyPage';
import SupportPage from './SupportPage';
import TermsPage from './TermsPage';
import './styles.css';

const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
const RootComponent =
  pathname === '/downloads'
    ? DownloadsPage
    : pathname === '/terms'
    ? TermsPage
    : pathname === '/privacy'
      ? PrivacyPage
      : pathname === '/support'
        ? SupportPage
        : App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);
