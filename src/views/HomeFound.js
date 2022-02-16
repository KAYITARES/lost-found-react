import React, { useState } from "react";
import "antd/dist/antd.css";
import HomeLayout from "../components/HomeLayout";
import Nav from "../components/navbar";
import RegisterFounder from "../components/registerFounder";
import { Modal, Menu, Dropdown } from "antd";

const HomeFounder = () => {
  const [registerFoundVisible, registerFoundsetVisible] = useState(false);
  return (
    <HomeLayout>
      <Nav
        className="home-founder-nav"
        Home="HOME"
        registerFoundDocument="REGISTER DOCUMENT FOUND"
        allFoundDocument="ALL FOUND DOCUMENT"
        allLostDocument="ALL LOST DOCUMENT"
        allApprovedDocument="ALL APPROVED DOCUMENT"
      />

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">FOUNDER</span>
          <span className="heading-primary-sub">
            Now your can click on Register button to fill The Document Found!!!
          </span>
        </h1>
        <a
          href="#"
          className="btn btn-white btn-animated"
          type="submit"
          onClick={() => registerFoundsetVisible(true)}
        >
          Register
        </a>
      </div>
      <Modal
        visible={registerFoundVisible}
        width="35%"
        onOk={() => registerFoundsetVisible(false)}
        onCancel={() => registerFoundsetVisible(false)}
        footer={null}
      >
        <RegisterFounder />
      </Modal>
    </HomeLayout>
  );
};
export default HomeFounder;
