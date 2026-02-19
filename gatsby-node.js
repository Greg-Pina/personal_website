const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
            tags
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.", result.errors);
    return;
  }

  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  const tagTemplate = path.resolve("src/templates/tag.js");

  // Create blog post pages
  result.data.allMarkdownRemark.nodes.forEach(node => {
    if (!node.frontmatter?.slug) {
      return;
    }

    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        id: node.id
      }
    });
  });

  // Create tag pages
  const tags = new Set();
  result.data.allMarkdownRemark.nodes.forEach(node => {
    if (node.frontmatter?.tags) {
      node.frontmatter.tags.forEach(tag => {
        tags.add(tag);
      });
    }
  });

  tags.forEach(tag => {
    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
    createPage({
      path: `/blog/tags/${tagSlug}/`,
      component: tagTemplate,
      context: {
        tag: tag
      }
    });
  });

  // Create main tags archive page
  createPage({
    path: `/blog/tags/`,
    component: path.resolve("src/templates/tags-archive.js"),
    context: {}
  });
};
