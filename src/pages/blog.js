import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo title="Blog" />
      <section className="section">
        <h2>Blog</h2>
        <p>Short notes on analytics engineering, leadership, and building.</p>
        <div className="blog-list">
          {posts.map(post => (
            <article className="blog-item" key={post.id}>
              <h3>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              </h3>
              <p>{post.frontmatter.description}</p>
              <div className="card-meta">{post.frontmatter.date}</div>
            </article>
          ))}
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
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          description
          slug
        }
      }
    }
  }
`;

export default BlogPage;
