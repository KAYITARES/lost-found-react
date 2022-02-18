import React from "react";
import "./HomeLayout.css";
import "antd/dist/antd.css";
import logo from "../assets/img/logo.png";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="main-nav">
        <div className="logo-img">
          <a href="/">
            <img src={logo} />
          </a>
        </div>

        <div className="main-nav-right">
          <ul>
            <li>
              <a href="/aboutus" className="header-nav-link">
                ABOUT-US
              </a>
            </li>
            <li>
              <a href="/contactus" className="header-nav-link">
                CONTACT-US
              </a>
            </li>
            <li>
              <div id="google_translate_element"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
