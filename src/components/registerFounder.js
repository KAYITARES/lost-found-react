import React, { useState } from "react";
import "./HomeLayout.css";
import {
  Modal,
  Form,
  Input,
  Upload,
  Button,
  Checkbox,
  Select,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import SignUp from "../components/Signup";
import LostFoundService from "../services/lostFoundApis";
import {
  PhoneOutlined,
  LockOutlined,
  UserOutlined,
  MessageOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const RegisterFounder = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    LostFoundService.registerDocument(values).then((res) => {
      if (!res) {
        return notification.error({
          message: "server is down",
        });
      }
      if (res.status === 200) {
        return notification.success({
          message: "Your document has been registered",
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });

    // localStorage.setItem("registerFoundDoc", true);
    // navigate("/founder/allDocument");
  };
  return (
    <>
      <a href="/">
        <img src={logo} style={{ width: "200px", marginBottom: "20px" }} />
      </a>
      <br />
      <center>
        <h2
          style={{
            marginBottom: "15px",
            letterSpacing: "2px",
            fontFamily: "serif",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          <b>
            {" "}
            <UserOutlined
              className="site-form-item-icon"
              style={{ color: "skyblue" }}
            />
            FOUND DOCUMENT
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
          <Form.Item
            label="Type of The Document"
            name=" DocumaTypeId"
            rules={[{ required: "true" }]}
          >
            <Select
              showSearch
              style={{ width: 250, marginLeft: "50px" }}
              placeholder="Select Document Type"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
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
            rules={[{ required: true }]}
          >
            <Input
              type="number"
              placeholder="Document Number"
              style={{ width: 250, marginLeft: "50px" }}
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            label="Picture of Document"
            name="Picturesofdocs"
            rules={[{ required: true }]}
          >
            <Upload>
              <Button
                icon={<UploadOutlined />}
                style={{ width: 250, marginLeft: "50px" }}
              >
                Upload Image
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true }]}
          >
            <TextArea
              rows={3}
              placeholder="Description....."
              style={{ width: 250, marginLeft: "50px" }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </center>
    </>
  );
};
export default RegisterFounder;
