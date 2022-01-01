import { useContext, useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { currentUserContext } from "../context/CurrentUser";
import { FirebaseContext } from "../context/FireContext";
import { SecondUserContext } from "../context/secondUser";
import ChatMassage from "./ChatMassage";
import "./chatbody.css";

const ChatContent = () => {
  const { messagesCollection } = useContext(FirebaseContext);
  const { secondUserData } = useContext(SecondUserContext);
  const { userData } = useContext(currentUserContext);
  const [messagesSorted, setMessagesSorted] = useState([]);
  const query =
    secondUserData?.uid &&
    messagesCollection
      .where("relation", "in", [
        `${userData.uid}/${secondUserData.uid}`,
        `${secondUserData.uid}/${userData.uid}`,
      ])
      .limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  useEffect(() => {
    if (messages) {
      setMessagesSorted(messages?.sort((a, b) => a.createdAt - b.createdAt));
    }
  }, [messages]);

  return (
    <div className="chat-area-main shadow mt-4">
      {messagesSorted.map((data, index) => (
        <ChatMassage
          key={index}
          owner={data.createdBy === userData.uid}
          msgData={data.Msg}
          photoURl={
            data.createdBy === userData.uid
              ? userData.photoURL
              : secondUserData.photoURL
          }
          msgTime={data.createdAt}
          Img={data.Img}
        />
      ))}
    </div>
  );
};

export default ChatContent;
