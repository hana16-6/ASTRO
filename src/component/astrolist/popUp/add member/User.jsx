import React from "react";
import { useContext } from "react";
import { SecondUserContext } from "../../../context/secondUser";

function User({ data, setTrigger, addMember }) {
  const { secondUserData } = useContext(SecondUserContext);
  return (
    <div
      className={`msg ${
        data?.uid === secondUserData?.uid && "active"
      } friendList`}
      onClick={() => {
        setTrigger(false);
        addMember({ name: data?.displayName, photo: data?.photoURL });
      }}
    >
      <div className="msg-profile group">
        <img src={data?.photoURL} alt="" />
      </div>
      <div className="msg-detail">
        <div className="msg-username text-color fw-bold">
          {data?.displayName}
        </div>
      </div>
    </div>
  );
}

export default User;
