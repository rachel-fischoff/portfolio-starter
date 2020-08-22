import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-container-row">
      <form className="contact-form" name="contact" data-netlify="true" method="post" action="#">
        <label>
          Name
          <input className="contact-input" type="text" name="name" id="name" />
        </label>
        <br />
        <label>
          Email
          <input
            className="contact-input"
            type="email"
            name="email"
            id="email"
          />
        </label>
        <br />
        <label>
          Subject
          <input
            className="contact-input"
            type="text"
            name="subject"
            id="subject"
          />
        </label>
        <br />
        <label>
          Message
          <textarea
            className="contact-input"
            name="message"
            id="message"
            rows="5"
          />
        </label>
        <br />
        <button className="contact-button" type="submit">
          Send
        </button>
        <input className="contact-button" type="reset" value="Clear" />
      </form>
      <br />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Contact;
