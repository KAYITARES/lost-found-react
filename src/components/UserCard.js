import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import "./HomeLayout.css";
import SingleUserDoc from "../components/singleUserDoc";

const UserLost = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const handleClickVisible = () => {
    setVisible(true);
  };
  const closeVisible = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="userCard">
        <div class="card__side card__side--front ">
          <div className="card__picture card__picture-1">
            <img src={user.picture[0]} />
          </div>
          <div className="card__heading">
            <p>{user.IDofthedocument}</p>
          </div>
          <div className="card__details">
            <h4>{user.DocumaTypeId}</h4>
            <h5
              style={
                user.status === "pending"
                  ? { color: "blue" }
                  : { color: "green" }
              }
            >
              {user.status}
            </h5>
          </div>
        </div>

        <div class="card__side card__side--back card__side--back-1">
          <div class="card__cta">
            <div className="card__name-box">
              <p className="card__name-name">{user.DocumaTypeId}</p>

              <p className="card__name-id">{user.IDofthedocument}</p>
              <p
                className="card__name-status"
                style={
                  user.status === "pending"
                    ? { color: "blue" }
                    : { color: "green" }
                }
              >
                {user.status}
              </p>
            </div>
            <a
              href="#"
              className="btn btn-more"
              onClick={() => handleClickVisible()}
            >
              Read more....
            </a>
          </div>
        </div>
      </div>

      <Modal
        visible={visible}
        width="95%"
        bodyStyle={{ height: 500 }}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
        // DocumaTypeId={user.DocumaTypeId}

        onClose={() => closeVisible()}
      >
        <SingleUserDoc user={user} />
      </Modal>
    </>
  );
};
export default UserLost;
