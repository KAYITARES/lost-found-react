import React, { useState } from "react";
import "./HomeLayout.css";
import { Modal, Form, Input, Button} from "antd";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';



const Nav = (props) => {
  const [visible, setVisible] = useState(false);
  const [visibleSignUp, setVisibleSignUp] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    localStorage.setItem("userLogedIn", true);
    localStorage.setItem("userSignUp", true);

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
          <Button htmlType="submit" onClick={() => { }}>
            Login
          </Button>
        </Form>

      </Modal>


      <Modal
         visible={visibleSignUp}
         width="40%"
         onOk={() => setVisibleSignUp(false)}
         onCancel={() => setVisibleSignUp(false)}
      >
 <h1>SignUp Form</h1>
        <Form onFinish={onFinish}>

        <Form.Item
            label="FirstName"
            name="FirstName"
            rules={[{ required: "true", type: "FirstName" }]}
          >
            <Input type="FirstName" />
            </Form.Item>


            <Form.Item
            label="SecondName"
            name="SecondName"
            rules={[{ required: "true", type: "SecondName" }]}
          >
            <Input type="SecondName" />
            </Form.Item>

            <Form.Item
            label="Phone"
            name="Phone"
            rules={[{ required: "true", type: "phone" }]}
          >
            <Input type="Phone" />
            </Form.Item>



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
            sign up
          </Button>
        </Form>



      </Modal>

{/* 
      <Modal

        visible={visibleSignUp}
        width="40%"
        onOk={() => setVisibleSignUp(false)}
        onCancel={() => setVisibleSignUp(false)}

      >


        const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="250">+250</Option>
            <Option value="250">+250</Option>
          </Select>
        </Form.Item>
        );
        const suffixSelector = (
        <Form.Item name="suffix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >

          </Select>
        </Form.Item>
        );


        ;
        return (
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}

        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="username"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>


          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>




          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

         
               

         
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        );


        {/* ReactDOM.render(<RegistrationForm />, document.getElementById('container')); */}







      {/* </Modal>  */}
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
                  <a href="#" onClick={() => setVisibleSignUp(true)}>
                    {props.signUp}</a>
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