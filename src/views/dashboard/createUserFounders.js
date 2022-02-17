import React from "react";
import DashboardLayout from "../../components/dashboardlayout.js"
import DetailDocument from "../../assets/constants/alldetalis.json"
import DocumentType from "../../assets/constants/document.json"
import UserFounder from "../../assets/constants/userfounder.json"
import { Space, Table,Card } from 'antd';
import { EditOutlined, DeleteOutlined, MenuOutlined } from '@ant-design/icons'
import logo from '../../assets/img/logo.png'
// import "antd/dist/antd.css";


const columnss = [

    {
      title: "Name of the founder",
      dataIndex: "Name of the founder",
      key: "Name of the founder",
  
    },
  
    {
      title: 'Document type',
      dataIndex: "Document type",
      key: 'Document type',
  
    },
    {
      title: 'Description',
      dataIndex: "Description",
      key: 'Description',
  
  
    },
    {
      title: 'ID of the document',
      dataIndex: "ID of the document",
      key: 'ID of the document',
  
  
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
  
  const UserFounders = () => {
  
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
          {/* <><Table columns={column} dataSource={DocumentType} /> </> */}
        {/* </div>
        <div className="Details-div"> */}
        {/* <br/> */}
       {/* <><Table columns={columns} dataSource={DetailDocument}/></> */}
       
       <><Table columns={columnss} dataSource={UserFounder} /> </>
  
       </div>
        
   </div>
   </div>
  
   </Card>
    )
  
  
  }
  export default UserFounders ;