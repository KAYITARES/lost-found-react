import React, { useState } from "react";
import "antd/dist/antd.css";
import HomeLayout from "../components/HomeLayout";
import Nav from "../components/navbar";
import SignUp from "../components/Signup";
import { Modal, Form, Input, Upload, Button, Checkbox, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Footer from "../components/footer";
import About from "../components/about";
import {
  PhoneOutlined,
  LockOutlined,
  UserOutlined,
  MessageOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const Home = () => {
  const [visibleSignUp, setVisibleSignUp] = useState(false);

  return (
    <>
      <HomeLayout>
        <Nav home="HOME" signIn="SIGN-IN" signUp="SIGN-UP" />
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Lost&Found</span>
            <span className="heading-primary-sub">
              Welcome!!! Now you can be able to found your lost document by just
              sign-up
            </span>
          </h1>
          <a
            href="#"
            className="btn btn-white btn-animated"
            type="submit"
            onClick={() => setVisibleSignUp(true)}
          >
            Sign-up
          </a>
        </div>

        <Modal
          visible={visibleSignUp}
          width="30%"
          onOk={() => setVisibleSignUp(false)}
          onCancel={() => setVisibleSignUp(false)}
          footer={null}
        >
          <SignUp />
        </Modal>
      </HomeLayout>
      <About />
      <Footer />
    </>
  );
};
export default Home;
