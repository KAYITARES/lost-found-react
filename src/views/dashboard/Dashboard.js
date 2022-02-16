import React from "react";
import DashboardLayout from "../../components/dashboardlayout.js";
// import { BarChart } from "reaviz";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/img/logo.png";
import { Card } from "antd";
// import "./dashboardLayout.css";

const statistics = [
  {
    key: "Found",
    data: 5,
  },
  {
    key: "Lost",
    data: 14,
  },
  {
    key: "pending",
    data: 15,
  },
  {
    key: "total",
    data: 30,
  },
];

const DashboardInfos = () => {
  return (
    <Card>
      <div className="DashInfos">
        <div className="header">
          {/* <div className="menu"> <MenuOutlined /> </div> */}
          <div className="logo-division">
            {" "}
            <img src={logo}></img>
          </div>
          {/* <div className="logout">log out</div> */}
        </div>
        <DashboardLayout>
          <div className="chart-container">
            <div style={{ margin: "55px", textAlign: "center" }}>
              {/* <BarChart width={350} height={250} top={100} data={statistics} /> */}
            </div>
          </div>
        </DashboardLayout>
      </div>
    </Card>
  );
};

export default DashboardInfos;
