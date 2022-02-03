import React, { useState } from "react";
import "./HomeLayout.css";
import { Modal, Form, Input,Upload, Button,Checkbox , Select,} from "antd";
import {UploadOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/logo.png'
import { PhoneOutlined, LockOutlined,UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const Nav = (props) => {
  const [visible, setVisible] = useState(false);
  const[registerFoundVisible,registerFoundsetVisible]=useState(false);
  const onFinish = (values) => {
    console.log(values);
    localStorage.setItem("userLogedIn", true);
    navigate("/user");
    localStorage.setItem("registerFoundDoc",true)
    navigate("/founder/allDocument")
   
   
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
          width="35%"
          onOk={() => registerFoundsetVisible(false)}
          onCancel={() => registerFoundsetVisible(false)}
          footer={null}
        >
           
            <a href="/">
                  <img src={logo} style={{width:"200px",marginBottom:"20px"}}/>
  
                  </a><br/>
                  <center>
          <h2 style={{marginBottom:"15px",letterSpacing:"2px", fontFamily:"serif",fontWeight:"bold",fontSize:"28px"}}>
           <b> <UserOutlined className="site-form-item-icon" style={{color:"skyblue"}} />FOUND DOCUMENT</b>
          </h2>
         
          <Form   name="normal_login" className="login-form"
        initialValues={{
          remember: true,
        }} onFinish={onFinish}>
            <Form.Item 
           
            label="Type of The Document"
            name=" DocumaTypeId" 
            rules={[{ required: "true" }]}>
              <Select
              
    showSearch
    style={{ width:250,marginLeft:"50px"}}
    
    placeholder="Select Document Type"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
   
  >
    <Option value="1">ID</Option>
    <Option value="2">Degree</Option>
    <Option value="3">Driving Licence</Option>
    <Option value="4">Insurance Card</Option>
    
  </Select>
            </Form.Item>
            <Form.Item 
            label="Enter Document Number"
            name="IDofthedocument" 
            rules={[{ required: true }]}>
            <Input
         
          type="number"
          placeholder="Document Number"
          style={{ width:250,marginLeft:"50px"}}
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
          </Form.Item>
          <Form.Item 
            label="Picture of Document"
            name="Picturesofdocs" 
            rules={[{ required: true }]}>
             
             
              
            <Upload>
            
        
        <Button icon={<UploadOutlined />} style={{ width:250,marginLeft:"50px"}}>Upload Image</Button>
      
          </Upload>
          </Form.Item>
          <Form.Item 
            label="Description"
            name="description" 
            rules={[{ required: true }]}>
            <TextArea rows={3} 
         
          
          placeholder="Description....."
          style={{ width:250,marginLeft:"50px"}}
         
        />
          </Form.Item>
        
          <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
      
      </Form.Item>
        
          </Form>
          </center>
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
                  <a href="/founder/allDocument">{props.allFoundDocument}</a>
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
