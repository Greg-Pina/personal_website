// Calculate estimated read time for blog posts
// Average reading speed: 200-250 words per minute
// Using 225 as standard

export const calculateReadTime = (html) => {
  if (!html) return 0;
  
  // Strip HTML tags and get word count
  const text = html.replace(/<[^>]*>/g, ' ');
  const wordCount = text.trim().split(/\s+/).length;
  
  // Calculate minutes (round up)
  const readTime = Math.ceil(wordCount / 225);
  
  return Math.max(1, readTime); // Minimum 1 minute
};

export const formatReadTime = (minutes) => {
  if (minutes === 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
};
