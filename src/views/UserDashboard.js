import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import HomeLayout from '../components/HomeLayout'
import Nav from '../components/navbar'
import { Modal, Form, Input, Button, Checkbox,Select, Upload} from "antd";

import logo from '../assets/img/logo.png'
import { PhoneOutlined, LockOutlined,UserOutlined,UploadOutlined } from "@ant-design/icons";


// import {UserOutlined} from "@ant-design/icons";

const { Search } = Input;
const { TextArea } = Input;
const { Option } = Select;
const onSearch = value => console.log(value);

const UserDashboard=()=>{
    const [visible, setVisible] = useState(false);
const onFinish = (values) => {
  console.log(values);
  localStorage.setItem("userLogedIn", true);
  navigate("/user/allDocument");
};
const navigate = useNavigate();
    return(
        <>
        <Modal 
          visible={visible}
          width="35%"
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          footer={null}
        >
           
            <a href="/">
                  <img src={logo} style={{width:"200px",marginBottom:"20px"}}/>
  
                  </a><br/>
                  <center>
          <h2 style={{marginBottom:"15px",letterSpacing:"2px", fontFamily:"serif",fontWeight:"bold",fontSize:"28px"}}>
           <b> <UserOutlined className="site-form-item-icon" style={{color:"skyblue"}} />LOST DOCUMENT</b>
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
            >
             
             
              
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
        <div>
             <HomeLayout>
             
             <div className="navbar">
        <div className="navbar-link">
          <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="#"  onClick={() => setVisible(true)}>REGISTER LOST DOCUMENT</a></li>
              <li><a href="/user/allDocument" >ALL DOCUMENT</a></li>
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