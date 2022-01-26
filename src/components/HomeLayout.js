import './HomeLayout.css'
import React from 'react';
import Header from './Header'

const HomeLayout=({children})=>{
    return(
        <div className='home-container'>
            
           
            <div style={{minHeight:"100vh"}}>
            <Header/>
                {children}
            </div>

            

        </div>
    ) 

}
export default HomeLayout