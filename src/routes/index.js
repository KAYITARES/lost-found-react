import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../views/Home';
import HomeFounder from '../views/HomeFound';
import UserDashboard from '../views/UserDashboard'

const Index =()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/founder" element={<HomeFounder/>}></Route>
            <Route exact path="/user" element={<UserDashboard/>}></Route>
        </Routes>
    )
}
export default Index