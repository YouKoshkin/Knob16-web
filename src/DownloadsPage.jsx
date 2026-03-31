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
          <a href="/files/Knob16-surface-control.zip" download>
            Knob16-surface-control.zip
          </a>{' '}
          — 2.4 KB — Modified March 31, 2026
        </p>
      </div>
    </div>
  );
}
