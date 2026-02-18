import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import projects from "../data/projects.json";

const ProjectsPage = () => (
  <Layout>
    <Seo title="Projects" />
    <section className="section">
      <h2>Projects</h2>
      <p>Selected work and learning tracks I am actively building out.</p>
      <div className="card-grid">
        {projects.map(project => (
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

export default ProjectsPage;
