import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import LostFoundService from "../services/lostFoundApis";

import {
  PhoneOutlined,
  UserOutlined,
  MessageOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

const SignupForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    LostFoundService.createAccount(values).then((res) => {
      if (!res) {
        return notification.error({
          message: "server is down",
        });
      }
      if (res.status === 200) {
        return notification.success({
          message: "Your account has been registered",
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
    localStorage.setItem("userLogedIn", true);
    navigate("/user");
  };

  return (
    <>
      <a href="/">
        <img src={logo} style={{ width: "200px", marginBottom: "20px" }} />
      </a>
      <br />
      <h2>
        <b>
          {" "}
          <UserOutlined
            className="site-form-item-icon"
            style={{ padding: "5px", color: "skyblue" }}
          />
          SignUp Form
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
        <Form.Item name="firstName" rules={[{ required: "true" }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter Your FirstName"
          />
        </Form.Item>

        <Form.Item name="lastName" rules={[{ required: "true" }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter Your SecondName"
          />
        </Form.Item>

        <Form.Item name="phone" rules={[{ required: "true" }]}>
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Enter Your  Phone Number"
          />
        </Form.Item>

        <Form.Item name="email" rules={[{ required: "true", type: "email" }]}>
          <Input
            prefix={<MessageOutlined className="site-form-item-icon" />}
            placeholder="Enter Your Email"
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password type="password" placeholder="Type Password" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          // href="/user"
          className="login-form-button"
        >
          sign up
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
