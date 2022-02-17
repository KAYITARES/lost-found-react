import React, {useState,useEffect}from "react";
import DashboardLayout from "../../components/dashboardlayout.js"
import DetailDocument from "../../assets/constants/alldetalis.json"
import DocumentType from "../../assets/constants/document.json"
import UserFounder from "../../assets/constants/userfounder.json"
import { Space, Table,Card,Drawer } from 'antd';
import { EditOutlined, DeleteOutlined, MenuOutlined } from '@ant-design/icons'
import logo from '../../assets/img/logo.png'
// import "antd/dist/antd.css";



const column = [

  {
    title: 'Type of the document',
    dataIndex: 'type of the document',
    key: 'type of the document',

  },

  {
    title: 'Document number',
    dataIndex: "Document number",
    key: 'Document number',

  },
  {
    title: 'Description',
    dataIndex: "Description",
    key: 'Description',


  },

  {
    title: 'Lost',
    dataIndex: "Lost",
    key: 'Lost',



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

  const FoundDocuments = () => {
  
    return (
      <Card>
        <Drawer>
      <div>
      <div className="header">
                  {/* <div className="menu"> <MenuOutlined /> </div> */}
                  <div className="logo-division"> <img src={logo}></img></div>
                
              </div>
  
      <div className="allUsers-container">
        <div className="dasboard_layout">
          <DashboardLayout />
        </div>
  
  
  
        <div className="document-div">
          <><Table columns={column} dataSource={DocumentType} /> </>
        {/* </div>
        <div className="Details-div"> */}
        {/* <br/> */}
       {/* <><Table columns={columns} dataSource={DetailDocument}/></> */}
       
       {/* <><Table columns={columnss} dataSource={UserFounder} /> </> */}
  
       </div>
        
   </div>
   </div>
   </Drawer>
   </Card>
   
    )
  
  
  }
  export default FoundDocuments;
