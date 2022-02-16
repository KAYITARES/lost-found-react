import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import DetailsLayout from "../components/DetailsLayout";
import AllUserData from "../assets/constants/allUserDoc.json";
import UserCard from "../components/UserCard";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#646060",
    }}
  />
);

const onSearch = (value) => console.log(value);
const AllUserDoc = () => {
  return (
    <div className="userAllDoc">
      <DetailsLayout>
        <center>
          <div className="texto">
            <p>You can find all information about your lost document now!!! </p>
          </div>

          <div className="userSearch">
            <Space direction="vertical">
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                style={{ width: 700 }}
                suffix={suffix}
                onSearch={onSearch}
              />
            </Space>
          </div>
        </center>
      </DetailsLayout>

      <div className="userLost-container">
        {AllUserData.map((data) => (
          <UserCard user={data} />
        ))}
      </div>
    </div>
  );
};
export default AllUserDoc;
