import React, { useState } from "react";
import "./HomeLayout.css";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { PhoneOutlined, LockOutlined } from "@ant-design/icons";

const Nav = (props) => {
  const [visible, setVisible] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    localStorage.setItem("userLogedIn", true);
    navigate("/user");
  };
  const navigate = useNavigate();
  return (
    <>
      <Modal
        visible={visible}
        width="25%"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <h2>
          <center><b>Signin Form</b></center>
        </h2><br/>
        <Form   name="normal_login" className="login-form"
      initialValues={{
        remember: true,
      }} onFinish={onFinish}>
          <Form.Item name="phone" rules={[{ required: "true", type: "email" }]}>
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
        </Form>
      </Modal>
      <div className="navbar">
        <div className="navbar-link">
          <ul>
            {!props.signIn ? (
              <>
                <li>
                  <a>{props.Home}</a>
                </li>
                <li>
                  <a>{props.registerFoundDocument}</a>
                </li>
                <li>
                  <a>{props.allFoundDocument}</a>
                </li>
                <li>
                  <a>{props.allLostDocument}</a>
                </li>
                <li>
                  <a>{props.allApprovedDocument}</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a>{props.home}</a>
                </li>
                <li>
                  <a href="#" onClick={() => setVisible(true)}>
                    {props.signIn}
                  </a>
                </li>
                <li>
                  <a>{props.signUp}</a>
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
