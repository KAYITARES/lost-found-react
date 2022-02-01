import React, { useState } from "react";
import "./HomeLayout.css";

import { Modal, Form, Input,Upload, Button,Checkbox  } from "antd";
import {UploadOutlined} from '@ant-design/icons';



import { useNavigate } from "react-router-dom";
import logo from '../assets/img/logo.png'
import { PhoneOutlined, LockOutlined,UserOutlined } from "@ant-design/icons";

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
        width="25%"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
      >
          <a href="/">
                <img src={logo} style={{width:"120px",marginBottom:"20px"}}/>

                </a>
        <h2>
         <b> <UserOutlined className="site-form-item-icon" style={{padding:"5px",color:"skyblue"}} />Signin Form</b>
        </h2>
        <Form   name="normal_login" className="login-form"
      initialValues={{
        remember: true,
      }} onFinish={onFinish}>
          <Form.Item name="phone" rules={[{ required: "true", type: "tel" }]}>
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
