import React, { useState, useEffect } from 'react';

const VisitorStats = ({ postTitle }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // This will be populated by Google Analytics data
    // For MVP, we'll track page views via GA events
    // Future: fetch from backend that calls GA API for real-time stats
    
    // Track event in GA
    if (window.gtag) {
      window.gtag('event', 'blog_post_view', {
        post_title: postTitle
      });
    }

    // TODO: Fetch visitor stats from backend/GA API
    // Example: /api/visitor-stats?post={postTitle}
  }, [postTitle]);

  // MVP: Display placeholder or simple count
  // Once backend is connected, this will show real data like:
  // "You're the 45th visitor from Ohio this week"
  
  if (stats) {
    return (
      <div className="visitor-stats">
        <p>{stats.message}</p>
      </div>
    );
  }

  return null;
};

export default VisitorStats;
