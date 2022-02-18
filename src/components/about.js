import React from "react";
import "./HomeLayout.css";
// import { Player } from "video-react";
import imageOne from "../assets/img/image1.jpeg";
import imageTwo from "../assets/img/image2.jpeg";
import imageThree from "../assets/img/image3.jpeg";
import me from "../assets/img/me.jpg";

import video2 from "../assets/video/video2.mp4";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Exciting for lost & found</h2>
        </div>
        <div className="row-about">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to found your lost document
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              officiis reprehenderit provident velit distinctio itaque harum.
              Quaerat repudiandae animi quam enim fuga eos, accusamus nobis rem,
              perferendis accusantium distinctio libero.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Found Document like you never found before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              officiis reprehenderit provident velit distinctio itaque harum.
              Quaerat repudiandae animi quam enim.
            </p>
            <a href="#" class="btn-text">
              learn more&rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={imageOne}
                style={{ width: "55%", height: "250px" }}
                className="composition__photo composition__photo--p1"
              />
              <img
                src={imageTwo}
                style={{ width: "55%", height: "250px" }}
                className="composition__photo composition__photo--p2"
              />
              <img
                src={imageThree}
                style={{ width: "55%", height: "250px" }}
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
