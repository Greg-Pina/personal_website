import React from "react";
import { Link, withPrefix } from "gatsby";
import portrait from "../images/portrait.jpg";

const Layout = ({ children }) => {
  const resumeUrl = withPrefix("/docs/greg_pina_resume.pdf");

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <Link className="brand" to="/">
            <span className="brand-mark">
              <img className="brand-image" src={portrait} alt="Greg Pina" />
            </span>
            <span className="brand-text">Greg Pina</span>
          </Link>
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/contact">Contact</Link>
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
      <footer className="footer">
        Built with Gatsby. Subscribe via <a href={withPrefix("/rss.xml")}>RSS</a>.
      </footer>
    </>
  );
};

export default Layout;
