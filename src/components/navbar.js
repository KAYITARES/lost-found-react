import React, { useState } from "react";
import "./HomeLayout.css";
import { Modal, Form, Input,Upload, Button } from "antd";
import {UploadOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  const [visible, setVisible] = useState(false);
  const[registerFoundVisible,registerFoundsetVisible]=useState(false);
  const onFinish = (values) => {
    console.log(values);
    localStorage.setItem("userLogedIn", true);
    navigate("/user");
    localStorage.setItem("registerFoundDoc",true)
    navigate("/founder")
   
   
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

      <Modal
        visible={registerFoundVisible}
        width="40%"
        onOk={() =>registerFoundsetVisible(false)}
        onCancel={() =>registerFoundsetVisible(false)}
      >
        <h1>register Form</h1>
        <Form onFinish={onFinish}>
          <Form.Item
            label="IDofthedocument"
            name="IDofthedocument"
            rules={[{ required: "true", type: "IDofthedocument" }]}
          >
            <Input type="IDoftheDocument" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="Description"
            rules={[{ required: "true", type: "Description" }]}
          >
            <Input type="Description" />
          </Form.Item>
          <Form.Item
            label="PictureofDocument"
            name="PictureofDocument"
            rules={[{ required: true }]}
          >
           <Upload><Button icon={<UploadOutlined/>}>Upload Image</Button></Upload>
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
                  <a href="#" onClick={() =>registerFoundsetVisible (true)} >{props.registerFoundDocument}</a>
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
