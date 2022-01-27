import React from "react";
import "antd/dist/antd.css";
import HomeLayout from "../components/HomeLayout";
import Nav from "../components/navbar";

const HomeFounder = () => {
  return (
    <HomeLayout>
      <Nav className="home-founder-nav"
        Home="HOME"
        registerFoundDocument="REGISTER DOCUMENT FOUND"
        allFoundDocument="ALL FOUND DOCUMENT"
        allLostDocument="ALL LOST DOCUMENT"
        allApprovedDocument="ALL APPROVED DOCUMENT"
      />
      <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>
      <div className="text">
     <h1>POLICE DOCUMENT FOUNDER</h1>
     <p>Now your can click on Register button  to fill  The Document Found!!! </p>
     <button>Register</button>
      </div>

    </HomeLayout>
  );
};
export default HomeFounder;
