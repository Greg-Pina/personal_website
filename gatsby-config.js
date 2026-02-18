module.exports = {
  pathPrefix: "/personal_website",
  siteMetadata: {
    title: "Greg Pina",
    description: "Portfolio, projects, and notes on engineering and analytics.",
    siteUrl: "https://greg-pina.github.io/personal_website",
    author: "Greg Pina"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map(node => ({
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                date: node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}${node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}${node.frontmatter.slug}`,
                custom_elements: [{ "content:encoded": node.html }]
              })),
            query: `
              {
                allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                  nodes {
                    html
                    frontmatter {
                      title
                      date
                      description
                      slug
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Greg Pina Blog RSS Feed"
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap"
  ]
};
