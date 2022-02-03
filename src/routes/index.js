import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../views/Home';
import HomeFounder from '../views/HomeFound';
import UserDashboard from '../views/UserDashboard';
import AllUserDoc from '../views/allUserDocument';
import AllFounderDoc from '../views/AllUserFounder';
import AllLostDocument from '../views/AllLostDocument';
import AllApprovedDocument from '../views/AllApprovedDocument'
import DashLayout from "../components/dashboardLayout";
import AllUsers from '../views/DASHBOARD/allusers';
import Document from '../views/DASHBOARD/document';



const Index =()=>{
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/founder" element={<HomeFounder/>}></Route>
            <Route exact path="/user" element={<UserDashboard/>}></Route>


            

            {/* <Route exact path="/user/allDocument" element={<AllUserDoc/>}></Route> */}

            <Route exact path="/user/allDocument" element={<AllUserDoc/>}></Route>
            <Route exact path="/founder/allDocument" element={<AllFounderDoc/>}></Route>

            <Route exact path="/founder/allLostDocument" element={<AllLostDocument/>}></Route>
            <Route exact path="/founder/allApprovedDocument" element={<AllApprovedDocument/>}></Route>

            <DashLayout>
            <Routes>
            <Route  exact path='/dash/allusers' element={<AllUsers></AllUsers>} ></Route>
                <Route  exact path='/dash/document' element={<Document></Document>} ></Route>  
                   </Routes>
          
            </DashLayout>
     </Routes>
   </>
    )
}
export default Index;