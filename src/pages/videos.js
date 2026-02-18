import React from "react";
import { withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const VideosPage = () => (
  <Layout>
    <Seo title="Videos" />
    <section className="center-stack">
      <h2>Under construction</h2>
      <p>
        While the video gallery is getting polished, here is a good video to
        keep the vibes up.
      </p>
      <iframe
        className="video-frame"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Rick Astley - Never Gonna Give You Up"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <a className="btn btn-secondary" href={withPrefix("/rss.xml")}>
        Subscribe for updates
      </a>
    </section>
  </Layout>
);

export default VideosPage;
