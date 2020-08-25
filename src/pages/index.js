import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO";
import Video from "../components/Video";
import Intro from "../components/Intro";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Video />
  </Layout>
);

export default IndexPage;
