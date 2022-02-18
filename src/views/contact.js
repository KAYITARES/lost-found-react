import React from "react";
import DetailsLayout from "../components/DetailsLayout";
import Nav from "../components/navbar";
import video1 from "../assets/video/video.mp4";
const ContactUs = () => {
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
          <h2 className="heading-secondary abt">Contact us </h2>
        </div>
      </DetailsLayout>
      <div className="contact-container">
        <div className="row" style={{ margin: "0 auto" }}>
          <div className="contact">
            <div className="contact-form">
              <form action="#" className="form">
                <div className="u-center-text ">
                  <h2 className="heading-secondary">Contact us </h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full Name"
                    id="name"
                    required
                  />
                  <label for="name" className="form__label">
                    Full Name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email Address"
                    id="email"
                    required
                  />
                  <label for="email" className="form__label">
                    Email Address
                  </label>
                </div>
                <div className="form__group">
                  <textarea
                    type="text"
                    className="form__input"
                    placeholder="Enter Your Message  ....."
                    id="message"
                    required
                  />
                  <label for="message" className="form__label">
                    Enter Your Message
                  </label>
                </div>
                <div className="form__group">
                  <button className="btn btn--green">Send</button>
                </div>
              </form>
            </div>
          </div>
          {/* <video className="contact" autoPlay muted loop>
            <source src={video1} type="video/mp4 " style={{ width: "100%" }} />
            <source src={video1} type="video/webm " />
            <source src={video1} type="video/ogg " />
            You're browser is not supported
          </video> */}
        </div>
      </div>
    </>
  );
};
export default ContactUs;
