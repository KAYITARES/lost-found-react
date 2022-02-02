import React from 'react';
import "./HomeLayout.css";
import { Carousel } from 'antd';

const SingleFounderDoc=({user})=>{
    return(
        <div className="single-user-container">
             <Carousel autoplay>
             {
                user.picture.map((pic)=>(<img src={pic}/>))

            }

             </Carousel>
           
            
            <p>{user.DocumaTypeId}</p>
            <p>{user.IDofthedocument}</p>
            <p>{user.description}</p>
            <p>{user.status}</p>
        </div>
    )
}
export default SingleFounderDoc;