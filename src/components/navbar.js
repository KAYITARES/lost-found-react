import React, { useState } from "react";
import "./HomeLayout.css";
import { Modal, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

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
        width="40%"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <h1>Signin Form</h1>
        <Form onFinish={onFinish}>
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: "true", type: "email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Button htmlType="submit" onClick={() => {}}>
            Login
          </Button>
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
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
