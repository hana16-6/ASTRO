import { useContext } from "react";
import { SecondUserContext } from "../context/secondUser";

const ChatTitle = () => {
  const { secondUserData } = useContext(SecondUserContext);
  return (
    <div className="chat-area-header shadow d-flex p-3  align-items-center">
      <div className="mx-3">
        <img className="chat-msg-img" src={secondUserData?.photoURL} alt="" />
      </div>
      <div className="chat-area-title text-color fw-bold">
        {secondUserData?.displayName}
      </div>
    </div>
  );
};

export default ChatTitle;
