import React from 'react'
import HomeLayout from '../components/HomeLayout'
import Nav from '../components/navbar'

const UserDashboard=()=>{
    return(
        <div>
             <HomeLayout>
                 <Nav home="HOME" registerLostDocument="REGISTER LOST DOCUMENT" getUserAllLostDocument="ALL LOST DOCUMENT"/>

             </HomeLayout>
        </div>
    )
}
export default UserDashboard