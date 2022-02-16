import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "../views/Home";
import HomeFounder from "../views/HomeFound";
import UserDashboard from "../views/UserDashboard";
import AllUserDoc from "../views/allUserDocument";
import AllFounderDoc from "../views/AllUserFounder";
import AllLostDocument from "../views/AllLostDocument";
import AllApprovedDocument from "../views/AllApprovedDocument";

import AllUsers from "../components/TableGetAllUser";

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/founder" element={<HomeFounder />}></Route>
      <Route exact path="/user" element={<UserDashboard />}></Route>
      <Route exact path="/user/allDocument" element={<AllUserDoc />}></Route>
      <Route
        exact
        path="/founder/allDocument"
        element={<AllFounderDoc />}
      ></Route>
      <Route
        exact
        path="/founder/allLostDocument"
        element={<AllLostDocument />}
      ></Route>
      <Route
        exact
        path="/founder/allApprovedDocument"
        element={<AllApprovedDocument />}
      ></Route>

      <Route exact path="/allUsers" element={<AllUsers />}></Route>
    </Routes>
  );
};
export default Index;
