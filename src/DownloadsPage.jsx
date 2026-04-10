import React from 'react';

export default function DownloadsPage() {
  return (
    <div className="terms-page">
      <div className="terms-wrap">
        <a
          className="terms-back"
          href="/"
          data-analytics-event="cta_click"
          data-analytics-location="downloads"
          data-analytics-label="Back to site"
          data-analytics-target-path="/"
        >
          Back to site
        </a>
        <h1>Downloads</h1>
        <p>
          <a
            href="/files/Remote%20Scripts%20v1.1.zip"
            download
            data-analytics-event="download_click"
            data-analytics-file-name="Remote Scripts v1.1.zip"
          >
            Remote Scripts v1.1.zip
          </a>{' '}
          — 7.3 KB — Modified April 10, 2026
        </p>
      </div>
    </div>
  );
}
