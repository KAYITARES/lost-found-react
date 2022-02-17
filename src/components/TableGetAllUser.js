import React, { useState, useEffect } from "react";
import { Table, Space, Drawer, Skeleton, notification } from "antd";
import LostApis from "../services/lostFoundApis";

const AllUsers = () => {
  const [visible, setVisible] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    LostApis.getAllUsers().then((res) => {
      if (!res) {
        return notification.error({
          message: "server is not running!",
        });
      }
      if (res.status == 200) {
        setAllUsers(res.data.data);
      } else {
        return notification.error({
          message: "failed  to retrieved data from backend",
        });
      }
    });
  }, []);

  const userColumns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <a
            href="#"
            onClick={() => {
              setUser(record);
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
        <h1>All Users:</h1>
        {allUsers.length == 0 ? (
          <Skeleton active></Skeleton>
        ) : (
          <Table columns={userColumns} dataSource={allUsers} />
        )}
      </div>
      <Drawer
        placement="left"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Space>
          <h1>Name:{user.firstName}</h1>
        </Space>
      </Drawer>
    </>
  );
};
export default AllUsers;
