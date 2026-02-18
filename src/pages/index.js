import React from "react";
import { Link, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import projects from "../data/projects.json";

const IndexPage = () => {
  const resumeUrl = withPrefix("/docs/greg_pina_resume.pdf");

  return (
    <Layout>
      <Seo title="Home" />
      <section className="hero">
        <h1>Engineer. Analyst. Builder.</h1>
        <p>
          I build analytics systems, data-driven products, and pragmatic tooling.
          This site is a living portfolio of my projects, experiments, and
          writing.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={resumeUrl} target="_blank" rel="noreferrer">
            View resume
          </a>
          <Link className="btn btn-secondary" to="/projects">
            Explore projects
          </Link>
          <Link className="btn btn-secondary" to="/blog">
            Read the blog
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Featured projects</h2>
        <div className="card-grid">
          {projects.slice(0, 3).map(project => (
            <div className="card" key={project.name}>
              <div className="card-meta">{project.stack}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a className="btn btn-secondary" href={project.url} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
