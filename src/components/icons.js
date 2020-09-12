import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagramSquare,
  faTwitter,
  faLinkedin,
  faFacebook,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <div className="icons">
      <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
      <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} size="2x" />
    </div>
  );
};

export default Icons;
