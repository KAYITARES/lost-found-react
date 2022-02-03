import React from 'react';
import './HomeLayout.css'
import Header from './Header';


const DetailsLayout=({children})=>{
    return(
        <div className='home-container'>
            <div style={{minHeight:"70vh"}}>
           
            <Header className="header-fixed"/>
                {children}
            </div>

            

        </div>
    ) 

}
export default DetailsLayout