import React, { useState, useEffect } from "react";
import "./dashboardLayout.css";
import { MenuOutlined, ShoppingCartOutlined, TeamOutlined, AppstoreOutlined, MessageOutlined, BarChartOutlined, FolderOpenOutlined, ImportOutlined } from '@ant-design/icons';
import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";
import { Button } from "antd";


const DashboardLayout = ({ children }) => {
    const [visible, setVisibleDrawer] = useState(false);
    return (
        <div className="dash-container">

            <div className="menuSection">
                <ul className="icons">

                    <li><FolderOpenOutlined /> </li>
                    <li><ImportOutlined /></li>
                    <li>  <TeamOutlined /> </li>
                    <li>< FolderOpenOutlined /></li>

                </ul>

                <ul className="list">
                    <li> <a href="/Dashboard">Dashboard</a></li>
                    <li> <a href="/CreateUserFounders"> Manage UserFounders</a></li>
                    <li> <a href="/AllUsers">Manage Users</a></li>
                    <li><a href="/AllDocuments">AllDocuments</a></li>

                    <div className="Logout-style"><Link to="/">
                        <a href="/Logout">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log out
                            </Button></a>
                    </Link>

                    </div>

                </ul>

            </div>
            {children}
        </div>
    )
}

export default DashboardLayout;