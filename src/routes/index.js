import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "../views/Home";
import HomeFounder from "../views/HomeFound";
import UserDashboard from "../views/UserDashboard";
import AllUserDoc from "../views/allUserDocument";
import AllFounderDoc from "../views/AllUserFounder";
import AllLostDocument from "../views/AllLostDocument";
import AllApprovedDocument from "../views/AllApprovedDocument";
<<<<<<< HEAD
import UserFounders from "../views/dashboard/createUserFounders";
import FoundDocuments from "../views/dashboard/AllDocuments";
import DashboardInfos from "../views/dashboard/Dashboard";
=======
>>>>>>> 7386b93f6f62b1a6c0004230ab84b45b489a82c3
import ContactUs from "../views/contact";
import AboutUs from "../views/aboutUs";

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
<<<<<<< HEAD
      <Route
        exact
        path="/CreateUserFounders"
        element={<UserFounders />}
      ></Route>
      <Route exact path="/AllDocuments" element={<FoundDocuments />}></Route>
      <Route exact path="/Dashboard" element={<DashboardInfos />}></Route>
=======
>>>>>>> 7386b93f6f62b1a6c0004230ab84b45b489a82c3
      <Route exact path="/contactus" element={<ContactUs />}></Route>
      <Route exact path="/aboutus" element={<AboutUs />}></Route>
    </Routes>
  );
};
export default Index;
