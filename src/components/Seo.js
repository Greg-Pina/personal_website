import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaDescription = description || data.site.siteMetadata.description;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Helmet
      title={title ? `${title} | ${siteTitle}` : siteTitle}
      meta={[
        {
          name: "description",
          content: metaDescription
        }
      ]}
    />
  );
};

export default Seo;
