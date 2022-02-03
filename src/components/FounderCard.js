import React, { useState } from 'react';
import { Modal } from "antd";
import "antd/dist/antd.css";
import './HomeLayout.css';
import SingleFounderDoc from '../components/SingleFounderDoc'



const UserFounder = ({ user }) => {
    const [visible, setVisible] = useState(false);
    const handleClickVisible = () => {
        setVisible(true);
    }
    const closeVisible = () => {
        setVisible(false);
    }
    return (
        <>


            <div className='userCard'>


                <img src={user.picture[0]} />
                <h4>{user.DocumaTypeId}</h4>
                <p>{user.IDofthedocument}</p>
                <h5>{user.status}</h5>
                <a href="#" onClick={() => handleClickVisible()}>Read more....</a>

            </div>
            <Modal
                visible={visible}
                width="25%"
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={null}

                // DocumaTypeId={user.DocumaTypeId} 

                onClose={() => closeVisible()}>
                <SingleFounderDoc user={user} />

            </Modal>


        </>
    );
}
export default UserFounder;