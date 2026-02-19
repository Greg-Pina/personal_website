import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { calculateReadTime, formatReadTime } from "../utils/readTime";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const [selectedTag, setSelectedTag] = useState(null);

  // Extract all unique tags
  const allTags = [
    ...new Set(
      posts
        .flatMap(post => post.frontmatter.tags || [])
        .sort()
    )
  ];

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? posts.filter(post =>
        post.frontmatter.tags && post.frontmatter.tags.includes(selectedTag)
      )
    : posts;

  return (
    <Layout>
      <Seo title="Blog" />
      <section className="section">
        <h2>Blog</h2>
        <p>Short notes on analytics engineering, leadership, and building.</p>

        {allTags.length > 0 && (
          <div className="tag-filter-section">
            <div className="tag-filter">
              <button
                className={`tag-filter-btn ${selectedTag === null ? "active" : ""}`}
                onClick={() => setSelectedTag(null)}
              >
                All posts
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-filter-btn ${selectedTag === tag ? "active" : ""}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="blog-list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => {
              const readTime = calculateReadTime(post.html);
              return (
                <article className="blog-item" key={post.id}>
                  <h3>
                    <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
                  </h3>
                  <p>{post.frontmatter.description}</p>
                  
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <div className="blog-item-tags">
                      {post.frontmatter.tags.map(tag => (
                        <Link
                          key={tag}
                          to={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}/`}
                          className="tag-link-small"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="card-meta">
                    {post.frontmatter.date}
                    <span className="separator">·</span>
                    {formatReadTime(readTime)}
                  </div>
                </article>
              );
            })
          ) : (
            <p className="no-posts">No posts found with this tag.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        html
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          description
          slug
          tags
        }
      }
    }
  }
`;

export default BlogPage;
