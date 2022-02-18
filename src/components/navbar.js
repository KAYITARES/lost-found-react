import React, { useState } from "react";
import "./HomeLayout.css";
import LostApis from "../services/lostFoundApis";
import {
  Modal,
  Form,
  Input,
  Button,
  Checkbox,
  Menu,
  Dropdown,
  notification,
} from "antd";

import {
  DownOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import SignUp from "../components/Signup";
import RegisterFounder from "../components/registerFounder";

// import signin from "./sign"
// import { useNavigate } from "react-router";

const Nav = (props) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [registerFoundVisible, registerFoundsetVisible] = useState(false);
  const [visibleSignUp, setVisibleSignUp] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    LostApis.signinAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down " });
      }
      if (res.status === 200) {
        console.log(res.data.data);
        if (res.data.data.role === "userLost") {
          localStorage.setItem("userLogedIn", true);
          navigate("/user");
        } else if (res.data.role === "userFounder") {
          localStorage.setItem("userLogedIn", true);
          navigate("/founder");
        } else if (res.data.role === "admin") {
          localStorage.setItem("userLogedIn", true);
          navigate("/Dashboard");
        }
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
    // localStorage.setItem("userLogedIn", true);
    // navigate("/user");
    // localStorage.setItem("registerFoundDoc", true);
    // navigate("/founder/allDocument")
  };
  return (
    <>
      <Modal
        visible={visible}
        width="25%"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <a href="/">
          <img src={logo} style={{ width: "120px", marginBottom: "20px" }} />
        </a>
        <h2>
          <b>
            {" "}
            <UserOutlined
              className="site-form-item-icon"
              style={{ padding: "5px", color: "skyblue" }}
            />
            Signin Form
          </b>
        </h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item name="phone" rules={[{ required: "true" }]}>
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Phone Number"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or{" "}
            <a
              href="#"
              onClick={() => {
                setVisibleSignUp(true);
                setVisible(false);
              }}
            >
              register now!
            </a>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        visible={registerFoundVisible}
        width="35%"
        onOk={() => registerFoundsetVisible(false)}
        onCancel={() => registerFoundsetVisible(false)}
        footer={null}
      >
        <RegisterFounder />
      </Modal>
      <Modal
        visible={visibleSignUp}
        width="30%"
        onOk={() => setVisibleSignUp(false)}
        onCancel={() => setVisibleSignUp(false)}
        footer={null}
      >
        <SignUp />
      </Modal>
      <div className="navbar">
        <div className="navbar-link">
          <ul>
            {!props.signIn ? (
              <>
                <li>
                  <a href="/">{props.Home}</a>
                </li>
                <li>
                  <a href="#" onClick={() => registerFoundsetVisible(true)}>
                    {props.registerFoundDocument}
                  </a>
                </li>
                <li>
                  <a>
                    <Dropdown
                      placement="bottomLeft"
                      className="ant-dropdown-link"
                      overlay={
                        <Menu>
                          <Menu.Item key="0">
                            <a href="/founder/allDocument">
                              {props.allFoundDocument}
                            </a>
                          </Menu.Item>
                          <Menu.Item key="1">
                            <a href="/founder/allLostDocument">
                              {props.allLostDocument}
                            </a>
                          </Menu.Item>
                          <Menu.Item key="1">
                            <a href="/founder/allApprovedDocument">
                              {props.allApprovedDocument}
                            </a>
                          </Menu.Item>
                        </Menu>
                      }
                      trigger={["hover"]}
                    >
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        DOCUMENTS
                        <DownOutlined />
                      </a>
                    </Dropdown>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/">{props.home}</a>
                </li>
                <li>
                  <a href="#" onClick={() => setVisible(true)}>
                    {props.signIn}
                  </a>
                </li>
                <li>
                  <a onClick={() => setVisibleSignUp(true)}>{props.signUp}</a>
                </li>
              </>
            )}

            {/* <li><a>{props.home}</a></li>
            <li><a>{props.registerLostDocument}</a></li>
            <li><a>{props.getUserAllLostDocument}</a></li> */}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
