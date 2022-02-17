
import React from "react";
import DashboardLayout from "../../components/dashboardlayout.js"
import DetailDocument from "../../assets/constants/alldetalis.json"
import DocumentType from "../../assets/constants/document.json"
import UserFounder from "../../assets/constants/userfounder.json"
import { Space, Table,Card } from 'antd';
import { EditOutlined, DeleteOutlined, MenuOutlined } from '@ant-design/icons'
import logo from '../../assets/img/logo.png'
// import "antd/dist/antd.css";




const columns = [

  {
    title: 'First Name',
    dataIndex: 'First Name',
    key: 'First Name',

  },

  {
    title: 'Second Name',
    dataIndex: "Second Name",
    key: 'Second Name',

  },
  {
    title: 'Email',
    dataIndex: "Email",
    key: 'Email',


  },
  {
    title: 'Phone',
    dataIndex: "Phone",
    key: 'Phone',

  },

  {
    title: 'Adress',
    dataIndex: "Adress",
    key: 'Adress',

  },
  {

    title: 'status',
    dataIndex: "status",
    key: 'status',


    render: () => (
      <Space size="middle">


        <a> <DeleteOutlined /></a>
        <a> <EditOutlined /> </a>

      </Space>


    )
  },
  {

    title: 'Found',
    dataIndex: "Found",
    key: 'Found',


    render: () => (
      <Space size="middle">


        <a> <DeleteOutlined /></a>
        <a> <EditOutlined /> </a>

      </Space>


    )
  }


];




const AllUsers = () => {

  return (
    <Card>
    <div>
    <div className="header">
                {/* <div className="menu"> <MenuOutlined /> </div> */}
                <div className="logo-division"> <img src={logo}></img></div>
                {/* <div className="logout">log out</div> */}
                
            </div>

    <div className="allUsers-container">
      <div className="dasboard_layout">
        <DashboardLayout />
      </div>



      <div className="document-div">
        
     
     <><Table columns={columns} dataSource={DetailDocument}/></>
     
    
     </div>
      
 </div>
 </div>

</Card>
  )


}
export default AllUsers;