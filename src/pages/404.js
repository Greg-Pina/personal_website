import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found" />
    <section className="section">
      <h2>Page not found</h2>
      <p>That page does not exist yet. Try the blog or projects instead.</p>
    </section>
  </Layout>
);

export default NotFoundPage;
