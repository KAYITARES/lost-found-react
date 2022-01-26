import React from 'react';
import './HomeLayout.css'

const Nav=(props)=>{
    return (
        <div className="navbar">
            <div className='navbar-link'>
                <ul>
                    <li><a>{props.home}</a></li>
                    <li><a>{props.signIn}</a></li>
                    <li><a>{props.signOut}</a></li>
                    <li><a>{props.Home}</a></li>
                    <li><a>{props.registerFoundDocument}</a></li>
                    <li><a>{props.allFoundDocument}</a></li>
                </ul>
            </div>

        </div>
    );

}
export default Nav