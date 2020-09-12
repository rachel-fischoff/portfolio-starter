import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Icons from "../components/icons";
import SEO from "../components/SEO";

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="portfolio-container">
      <h1 className="portfolio-header">Projects</h1>{" "}
      <div className="portfolio-grid-outer">
        <div className="portfolio-grid-inner">
          <h2 className="project-header">Name</h2>
          <Icons />
        </div>
        <div className="portfolio-grid-inner">
          <h2 className="project-header">Name</h2>
          <Icons />
        </div>
        <div className="portfolio-grid-inner">
          <h2 className="project-header">Name</h2>
          <Icons />
        </div>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
