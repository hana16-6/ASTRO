import { useContext } from "react";
import { SecondUserContext } from "../context/secondUser";

const FriendInbox = ({ data }) => {
  const { secondUserData, setSecondUserData } = useContext(SecondUserContext);
  return (
    <div
      className={`msg ${
        data?.uid === secondUserData?.uid && "active"
      } friendList`}
      onClick={() => setSecondUserData(data)}
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
};

export default FriendInbox;
