import React from 'react';
import "./HomeLayout.css";
import { Carousel } from 'antd';

const SingleApprovedDoc=({user})=>{
    return (
      <div className="single-user-container">
        <div className="single-user-img">
          <Carousel autoplay style={{ width: "500px" }}>
            {user.picture.map((pic) => (
              <img src={pic} style={{ width: "-200px" }} />
            ))}
          </Carousel>
        </div>
        <div className="single-user-text">
          <div className="single-user-title">
            <h2>{user.DocumaTypeId}</h2>
            <h4>{user.IDofthedocument}</h4>
          </div>

          <p className="description">{user.description}</p>

          <p
            className="status"
            style={
              user.status === "pending" ? { color: "blue" } : { color: "green" }
            }
          >
            {user.status}
          </p>
          <div className="single-user-btn">
            <button className="bton-update">Update</button>
            <button className="bton-delete">Delete</button>
          </div>
        </div>
      </div>
    );
}
export default SingleApprovedDoc;