import React from "react";
import "antd/dist/antd.css";
import HomeLayout from "../components/HomeLayout";
import Nav from '../components/navbar'

const Home = () => {
  return (
    
  <HomeLayout>
     <Nav home="HOME" signIn="SIGN-IN" signUp="SIGN-UP"/>
    <div className="text">
    <h1>
    Lost  &  Found  Document.
    </h1>
    <p>Welcome!!!!  Now you can be able to easily found your lost document 
by click on sign-up Button of this website</p>
<button>Sign-up</button>

    </div>

    

  </HomeLayout>
  )
  ;
};
export default Home;
