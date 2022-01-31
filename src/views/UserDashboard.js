import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import HomeLayout from '../components/HomeLayout'
import Nav from '../components/navbar'
import { Modal, Form, Input, Button, Checkbox,Select} from "antd";

import logo from '../assets/img/logo.png'
import { PhoneOutlined, LockOutlined,UserOutlined } from "@ant-design/icons";


// import {UserOutlined} from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;
const onSearch = value => console.log(value);

const UserDashboard=()=>{
    const [visible, setVisible] = useState(false);
const onFinish = (values) => {
  console.log(values);
  localStorage.setItem("userLogedIn", true);
  navigate("/user");
};
const navigate = useNavigate();
    return(
        <>
        <Modal
          visible={visible}
          width="50%"
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          footer={null}
        >
            <a href="/">
                  <img src={logo} style={{width:"200px",marginBottom:"20px"}}/>
  
                  </a>
          <h2>
           <b> <UserOutlined className="site-form-item-icon" style={{padding:"5px",color:"skyblue"}} />LOST DOCUMENT</b>
          </h2>
          <Form   name="normal_login" className="login-form"
        initialValues={{
          remember: true,
        }} onFinish={onFinish}>
            <Form.Item 
            label="Type of The Document"
            name="" 
            rules={[{ required: "true", type: "text" }]}>
              <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Not Identified</Option>
    <Option value="2">Closed</Option>
    <Option value="3">Communicated</Option>
    <Option value="4">Identified</Option>
    <Option value="5">Resolved</Option>
    <Option value="6">Cancelled</Option>
  </Select>
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
          Or <a href="#"  >register now!</a>
        </Form.Item>
          </Form>
        </Modal>
        <div>
             <HomeLayout>
             
             <div className="navbar">
        <div className="navbar-link">
          <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="#"  onClick={() => setVisible(true)}>REGISTER LOST DOCUMENT</a></li>
              <li><a>ALL DOCUMENT</a></li>
              {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
              </ul>
              </div>
              </div>
                 
              <div className="text">
   <p>welcome  <span className='text-userName'>Clemence Arakaza</span></p>
     <p>Now your can click on Register button  register your Lost Document!!! </p>
     <button className="button" htmlType="submit" onClick={() => setVisible(true)}>Register</button>
      </div>  

             </HomeLayout>
        </div>
        </>
    )
}
export default UserDashboard