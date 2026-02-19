import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SocialShare from "../components/SocialShare";
import { calculateReadTime, formatReadTime } from "../utils/readTime";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const readTime = calculateReadTime(post.html);
  const siteUrl = data.site.siteMetadata.siteUrl;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description} />
      <article className="section">
        <h2>{post.frontmatter.title}</h2>
        <div className="post-meta">
          <span className="date">{post.frontmatter.date}</span>
          <span className="separator">·</span>
          <span className="read-time">{formatReadTime(readTime)}</span>
        </div>

        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="post-tags">
            {post.frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, "-")}/`}
                className="tag-link"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className="post-footer">
          <SocialShare
            title={post.frontmatter.title}
            slug={post.frontmatter.slug}
            siteUrl={siteUrl}
          />
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
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
`;

export default BlogPostTemplate;
