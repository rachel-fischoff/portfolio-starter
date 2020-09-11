import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/SEO";

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="portfolio-row">
      <div className="column">
        <div className="card">
          <h1>Project 1</h1>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <h1>Project 2</h1>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <h1>Project 3</h1>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <h1>Project 4</h1>
        </div>
      </div>
    </div>
    <br />
  </Layout>
);

export default Portfolio;
