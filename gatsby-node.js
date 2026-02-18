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
};
