import React, { useState, useEffect } from "react";
import { Table, Space, Drawer, Skeleton, notification } from "antd";
import LostApis from "../services/lostFoundApis";

const AllDocuments = () => {
  const [visible, setVisible] = useState(false);
  const [allDocuments, setAllDocuments] = useState([]);
  const [document, setDocument] = useState({});

  useEffect(() => {
    LostApis.getAllDocument().then((res) => {
      if (!res) {
        return notification.error({
          message: "server is not running!",
        });
      }
      if (res.status == 200) {
        setAllDocuments(res.data.data);
      } else {
        return notification.error({
          message: "failed  to retrieved data from backend",
        });
      }
    });
  }, []);

  const documaColumns = [
    {
      title: "documa type Id",
      dataIndex: "DocumaTypeId",
      key: "DocumaTypeId",
    },
    {
      title: "id of the document",
      dataIndex: "IDofthedocument",
      key: "IDofthedocument",
    },
    {
      title: "Pictures of docs",
      dataIndex: "Picturesofdocs",
      key: "Picturesofdocs",
    },
    {
      title: "role",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "User ID",
      dataIndex: "UserID",
      key: "UserID",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <a
            href="#"
            onClick={() => {
              setDocument(record);
              setVisible(true);
            }}
          >
            View
          </a>
          <a href="#" style={{ color: "green" }}>
            Edit
          </a>
          <a href="#" style={{ color: "red" }}>
            Delete
          </a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "80vh",
          background: "#D8DAE5",
          padding: "50px",
        }}
      >
        <h1>All Documents:</h1>
        {allDocuments.length == 0 ? (
          <Skeleton active></Skeleton>
        ) : (
          <Table columns={documaColumns} dataSource={allDocuments} />
        )}
      </div>
      <Drawer
        placement="left"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Space>
          <h1>documa type: {document.DocumaTypeId}</h1>
          <p>id of the document{document.IDofthedocument}</p>
        </Space>
      </Drawer>
    </>
  );
};
export default AllDocuments;
