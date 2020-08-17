import React from "react";
import Coding from "../assets/coding.mp4";

export const Video = () => {
  return (
    <div className="outer">
      <div className="home-top-video">
        <video autoPlay muted loop>
          <source src={Coding} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="home-video-text"></div>
    </div>
  );
};

export default Video;
