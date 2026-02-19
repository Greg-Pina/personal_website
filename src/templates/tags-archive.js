import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const TagsArchiveTemplate = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  // Extract all unique tags with counts
  const tagCounts = {};
  posts.forEach((post) => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  // Sort tags by count (descending) then alphabetically
  const sortedTags = Object.entries(tagCounts).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });

  return (
    <Layout>
      <Seo title="Blog Tags" description="Browse all blog posts by topic" />
      <section className="section">
        <div className="tag-header">
          <Link to="/blog/" className="back-link">
            ← Back to blog
          </Link>
          <h2>Browse by topic</h2>
          <p>All {sortedTags.length} topics</p>
        </div>

        <div className="tags-archive">
          {sortedTags.map(([tag, count]) => {
            const tagSlug = tag.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link key={tag} to={`/blog/tags/${tagSlug}/`} className="tag-archive-item">
                <span className="tag-name">#{tag}</span>
                <span className="tag-count">{count}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AllPostsForTags {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          tags
        }
      }
    }
  }
`;

export default TagsArchiveTemplate;
