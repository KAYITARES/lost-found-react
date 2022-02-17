import React from "react";
import m2 from "../assets/img/m2.jpg";
import hyguette from "../assets/img/hyguette.jpeg";
import clemence from "../assets/img/clemence.jpeg";
import video1 from "../assets/video/video.mp4";
import Nav from "../components/navbar";
import Header from "../components/Header";
import HomeLayout from "../components/HomeLayout";
import DetailsLayout from "../components/DetailsLayout";

const AboutUs = () => {
  return (
    <>
      <DetailsLayout>
        {/* <Header /> */}
        <Nav
          home="HOME"
          signIn="SIGN-IN"
          signUp="SIGN-UP"
          style={{ marginBottom: "0px" }}
        />
        <div className="u-center-text u-margin-bottom-big abt-div">
          <h2 className="heading-secondary abt">Who we Are </h2>
        </div>
      </DetailsLayout>
      <div className="who-we-are" style={{ marginTop: "0px" }}>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={video1} type="video/mp4 " />
            <source src={video1} type="video/webm " />
            <source src={video1} type="video/ogg " />
            You're browser is not supported
          </video>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={m2} className="story__image" />
              <figcaption className="story__caption">
                Kayitare cynthia
              </figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Found Document like you never found before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                officiis reprehenderit provident velit distinctio itaque harum.
                Quaerat repudiandae animi quam enim. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nam officiis reprehenderit
                provident velit distinctio itaque harum. Quaerat repudiandae
                animi quam enim.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={hyguette} className="story__image" />
              <figcaption className="story__caption">
                Arakaza Hyguette
              </figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Found Document like you never found before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                officiis reprehenderit provident velit distinctio itaque harum.
                Quaerat repudiandae animi quam enim. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nam officiis reprehenderit
                provident velit distinctio itaque harum. Quaerat repudiandae
                animi quam enim.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={clemence} className="story__image" />
              <figcaption className="story__caption">
                Umutoni Clemence
              </figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Found Document like you never found before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                officiis reprehenderit provident velit distinctio itaque harum.
                Quaerat repudiandae animi quam enim. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nam officiis reprehenderit
                provident velit distinctio itaque harum. Quaerat repudiandae
                animi quam enim.
              </p>
            </div>
          </div>
        </div>
        <div className="u-center-text ">
          <a href="#" class="btn-text">
            learn more&rarr;
          </a>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
