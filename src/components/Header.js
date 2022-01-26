import React from 'react';
import "./HomeLayout.css";
import 'antd/dist/antd.css';
import logo from "../assets/img/logo.png";


const Header=()=>{
    return(
        <div className='header'>
            <div className='main-nav'>
            <div className='logo-img'>
                <img src={logo}/>
            </div>
            <div className='main-nav-right'>
                <ul>
                    <li> <a>ABOUT-US</a></li>
                    <li><a> <a>CONTACT-US</a></a></li>
                   <li><div id="google_translate_element"></div></li> 
                </ul>
               
               
                
               
            </div>

            </div>
            

        </div>

    );
}
export default Header;