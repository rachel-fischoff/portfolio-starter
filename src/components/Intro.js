import React from "react";
import Headshot from "../assets/headshot.jpg";

export const Intro = () => {
  return (
    <div className="row intro-container-row">
      <div className="intro-container">
        <figure className="intro-container__shape">
          <img
            src={Headshot}
            alt="Person with a mask"
            className="intro-container__img"
          />
          <figcaption className="intro-container__caption">
            Jeremiah Smith
          </figcaption>
        </figure>
        <div className="intro-container__text">
          <h1 className="intro-container__heading anim-typewriter">
            Designer & Developer
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            architecto quod, illum molestias tempora maxime ipsam dolore! Odit
            doloremque quos nihil fuga magnam provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
