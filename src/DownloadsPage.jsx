import React from 'react';

export default function DownloadsPage() {
  return (
    <div className="terms-page">
      <div className="terms-wrap">
        <a className="terms-back" href="/">
          Back to site
        </a>
        <h1>Downloads</h1>
        <p>
          <a href="/files/Remote%20Scripts.zip" download>
            Remote Scripts.zip
          </a>{' '}
          — 12.3 KB — Modified April 2, 2026
        </p>
      </div>
    </div>
  );
}
