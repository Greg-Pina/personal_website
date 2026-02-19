import React from 'react';

const SocialShare = ({ title, slug, siteUrl }) => {
  const fullUrl = `${siteUrl}${slug}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <div className="social-share">
      <p className="share-label">Share this post</p>
      <a
        href={linkedInShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button linkedin"
        aria-label="Share on LinkedIn"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default SocialShare;
