import React from "react";
import "antd/dist/antd.css";
import HomeLayout from "../components/HomeLayout";
import Nav from '../components/navbar'

const HomeFounder=()=>{
    return(
        <HomeLayout>
            <Nav Home="HOME" registerFoundDocument="REGISTER DOCUMENT FOUND" allFoundDocument="ALL FOUND DOCUMENT"/>

        </HomeLayout>

    )
}
export default HomeFounder;