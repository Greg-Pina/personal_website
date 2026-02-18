import React from "react";
import { withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <section className="section">
      <h2>Contact</h2>
      <p>If you want to collaborate, reach out on LinkedIn or GitHub.</p>
      <div className="card-grid">
        <div className="card">
          <h3>LinkedIn</h3>
          <p>Professional profile and updates.</p>
          <a className="btn btn-secondary" href="https://www.linkedin.com/in/gregorypina/" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </div>
        <div className="card">
          <h3>GitHub</h3>
          <p>Open source work and experiments.</p>
          <a className="btn btn-secondary" href="https://github.com/Greg-Pina" target="_blank" rel="noreferrer">
            View GitHub
          </a>
        </div>
        <div className="card">
          <h3>RSS</h3>
          <p>Subscribe to blog updates with any RSS reader.</p>
          <a className="btn btn-primary" href={withPrefix("/rss.xml")}>
            Subscribe
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
