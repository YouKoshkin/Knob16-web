import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TermsPage from './TermsPage';
import './styles.css';

const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
const RootComponent = pathname === '/terms' ? TermsPage : App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);
