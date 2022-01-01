import { useContext } from "react";
import ChatContent from "../Chatbody/ChatContent";
import ChatFooter from "../Chatbody/ChatIFooter";
import ChatTitle from "../Chatbody/ChatTitle";
import FriendList from "../friendslist/friendIist";
import { SecondUserContext } from "../context/secondUser";
import { currentUserContext } from "../context/CurrentUser";
import { useHistory } from "react-router-dom";
import chatting from "../../images/chatting.json";
import Lottie from "reactjs-lottie";

import "./chatView.css";
const ChatView = () => {
  const { secondUserData } = useContext(SecondUserContext);
  const history = useHistory();
  const { userData } = useContext(currentUserContext);
  return userData ? (
    <>
      <div className="container">
        <div className="wrapper mt-5 py-3 px-4 shadow">
          <div className="header d-flex my-2 align-items-center">
            <img
              className="current-user-profile me-3"
              src={userData.photoURL}
              alt=""
            />
            <p className="m-0 fw-bold text-color">{userData.displayName}</p>
          </div>
          <div className="d-flex">
            <div className="conversation-area shadow">
              <FriendList />
            </div>

            <div className="chat-area">
              {secondUserData ? (
                <>
                  <ChatTitle />
                  <ChatContent />
                  <ChatFooter />
                </>
              ) : (
                <>
                  <div className="">
                    <div className="welcome-msg">
                      <h3 className="mb-3">Welcome In Our Chat</h3>
                      <Lottie
                        options={{
                          animationData: chatting,
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div> {history.push("/signIn")}</div>
    </>
  );
};

export default ChatView;
