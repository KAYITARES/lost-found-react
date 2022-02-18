import React from "react";
import logo from "../assets/img/logo.png";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-data">
        <div className="first-column">
          <div className="logo-home">
            <a href="\home">
              <img src={logo} style={{ width: "250px", height: "125px" }} />{" "}
            </a>
          </div>
          <p>PO BX 6419, KG 278 St, Kimisange Kigali</p>
          <p>
            <a href="tel:0785627690">+250 785627690</a>
          </p>
          <p>info@gskimisange</p>
        </div>
        <div className="second-column">
          <h5>
            Quick Menu
            <hr />
          </h5>
          <p>About</p>
          <p>Head of Travel’s Welcome</p>
          <p>Calendar</p>
          <p>Accreditations</p>
          <p>Some visited place</p>
          <p>Contact Us</p>
        </div>
        <div className="third-column">
          <h5>
            Services
            <hr />
          </h5>
          <p>Mission Driven Admissions</p>
          <p>Admissions Procedures</p>
          <p>Application for Admission</p>
          <p>Tuition and Fees</p>
          <p>SAT Testing Center</p>
          <p>Accreditations</p>
        </div>
        <div className="fourth-column">
          <h5>
            Contacts
            <hr />
          </h5>
          <form action="#">
            <div class="form-row">
              <div class="col dk-footer-form">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </button>
              </div>
            </div>
          </form>
          <br></br>
          <p>
            {" "}
            <FontAwesomeIcon icon={faHome} style={{ fontSize: "18px" }} />
            &nbsp;&nbsp;&nbsp;Kicukiro, Gikondo 10012, RDA
          </p>
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              style={{ fontSize: "16px" }}
            />
            &nbsp;&nbsp;&nbsp;info@gs_kimisange.com
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} style={{ fontSize: "18px" }} />
            &nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+250 785627690</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPrint} style={{ fontSize: "18px" }} />
            &nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+250 785627690</a>
          </p>
        </div>
      </div>
      <hr className="big-line" />
      <div className="sub-footer">
        <p>
          &copy; 2020 Copyright: <a href="">Lost&Found</a>
        </p>
        <div className="footer-icon">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="social"
              style={{ background: "#3B5998" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faTwitter}
              className="social"
              style={{ background: "#55ACEE" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              className="social"
              icon={faGooglePlusG}
              style={{ background: "#DD4B39" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              className="social"
              icon={faLinkedinIn}
              style={{ background: "#0976B4" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
