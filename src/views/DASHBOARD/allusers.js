import React from "react";
import DetailDocument from "../../assets/constant/details.json"
import DocumentType from "../../assets/constant/document.json"
import { Space, Table } from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import "antd/dist/antd.css";




const column= [
  
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
       
      
      
        render:()=>(
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
       
      
      
        render:()=>(
            <Space size="middle">
  
  
               <a> <DeleteOutlined /></a>
               <a> <EditOutlined /> </a>
               
            </Space>
      
  
        )
      }
    ];
    const columns= [

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
    
            title: 'Lost',
            dataIndex: "Lost",
            key: 'Lost',
           
    
          render:()=>(
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
           
    
          render:()=>(
              <Space size="middle">
    
    
                 <a> <DeleteOutlined /></a>
                 <a> <EditOutlined /> </a>
                 
              </Space>
    
    
          )
        }
        
        
        ]
      
const AllUsers=()=>{
  return(

    <><Table columns={column} dataSource={DocumentType} />       
    <Table columns={columns} dataSource={DetailDocument}/></>
    


  )  
}
export default AllUsers;