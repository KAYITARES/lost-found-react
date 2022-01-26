import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../views/Home';

const Index =()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
        </Routes>
    )
}
export default Index