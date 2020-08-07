import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

const Header = ({ siteTitle }) => {
  return <div>Let's add a nav bar</div>;
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
