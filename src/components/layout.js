/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Helmet from "react-helmet";
import "./layout.css";
import Header from "./header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>{/* <link rel="icon" href={favicon} /> */}</Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navbar />
      <div>
        <main> {children} </main>
        <footer>
          {" "}
          ©{new Date().getFullYear()}, Built with {` `}{" "}
          <a href="https://www.gatsbyjs.org"> Gatsby </a>{" "}
        </footer>{" "}
      </div>{" "}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
