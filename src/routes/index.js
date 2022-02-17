import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../views/Home';
import HomeFounder from '../views/HomeFound';
import UserDashboard from '../views/UserDashboard';
import AllUserDoc from '../views/allUserDocument';
import AllFounderDoc from '../views/AllUserFounder';
import AllLostDocument from '../views/AllLostDocument';
import AllApprovedDocument from '../views/AllApprovedDocument'
import AllUsers from '../views/dashboard/allusers';
// import Document from '../views/dashboard/document';
// import AllFounderDoc from '../views/AllUserFounder'
import UserFounders from '../views/dashboard/createUserFounders';
import FoundDocuments from '../views/dashboard/AllDocuments';
// import { Dashboard } from '../views/dashboard/Dashboard';
import DashboardInfos from "../views/dashboard/Dashboard"
// import ScaleDashInfos from "../views/dashboard/Dashboard"



const Index =()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/founder" element={<HomeFounder/>}></Route>
            <Route exact path="/user" element={<UserDashboard/>}></Route>
            <Route exact path="/user/allDocument" element={<AllUserDoc/>}></Route>
            <Route exact path="/founder/allDocument" element={<AllFounderDoc/>}></Route>
            <Route exact path="/founder/allLostDocument" element={<AllLostDocument/>}></Route>
            <Route exact path="/founder/allApprovedDocument" element={<AllApprovedDocument/>}></Route>
            <Route exact path="/allusers" element={<AllUsers/>}></Route>
            <Route exact path="/CreateUserFounders" element={<UserFounders/>}></Route>
            <Route exact path="/AllDocuments" element={<FoundDocuments/>}></Route>
            <Route exact path="/Dashboard" element={<DashboardInfos/>}></Route>
            {/* <Route exact path="/ScaleDashInfos" element ={<ScaleDashInfos/>}></Route> */}
        </Routes>
    )
}
export default Index