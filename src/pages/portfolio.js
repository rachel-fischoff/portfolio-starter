import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/SEO";

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="portfolio-container">
      <h1 className="portfolio-header">Projects</h1>{" "}
      <div className="portfolio-grid-outer">
        <div className="portfolio-grid-inner">
          <h2 className="project-header">Name</h2>
        </div>
        <div className="portfolio-grid-inner">
          <h2 className="project-header">Name</h2>
        </div>
        <div className="portfolio-grid-inner">
          <h2 className="project-header">Name</h2>
        </div>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
