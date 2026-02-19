import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { calculateReadTime, formatReadTime } from "../utils/readTime";

const TagTemplate = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data;
  const { tag } = pageContext;
  const posts = allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo title={`Posts tagged with #${tag}`} description={`All blog posts tagged with ${tag}`} />
      <section className="section">
        <div className="tag-header">
          <Link to="/blog/" className="back-link">
            ← Back to blog
          </Link>
          <h2>Posts tagged with #{tag}</h2>
          <p>
            {posts.length} post{posts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="blog-list">
          {posts.map((post) => {
            const readTime = calculateReadTime(post.html);
            return (
              <article className="blog-item" key={post.id}>
                <h3>
                  <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
                </h3>
                <p>{post.frontmatter.description}</p>

                {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                  <div className="blog-item-tags">
                    {post.frontmatter.tags.map((t) => (
                      <Link
                        key={t}
                        to={`/blog/tags/${t.toLowerCase().replace(/\s+/g, "-")}/`}
                        className="tag-link-small"
                      >
                        #{t}
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
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query PostsByTag($tag: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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

export default TagTemplate;
