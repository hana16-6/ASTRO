import { useContext, useState } from "react";
import { currentUserContext } from "../context/CurrentUser";
import { FirebaseContext } from "../context/FireContext";
import { SecondUserContext } from "../context/secondUser";
import InputEmoji from "react-input-emoji";

const ChatFooter = () => {
  const [msgContent, setMsgContent] = useState("");
  const { userData } = useContext(currentUserContext);
  const [file, setFile] = useState(null);
  const [img, setImg] = useState("");

  const { secondUserData } = useContext(SecondUserContext);
  const { messagesCollection, storage } = useContext(FirebaseContext);

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (file) {
      const ref = storage.ref(`images/${file.name}`);
      const uploadImg = ref.put(file);
      uploadImg.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          messagesCollection.add({
            createdAt: new Date(),
            Msg: msgContent,
            Img: url,
            createdBy: userData.uid,
            sentTo: secondUserData.uid,
            relation: `${userData.uid}/${secondUserData.uid}`,
          });
          setFile(null);
        });
      });
    } else {
      messagesCollection.add({
        createdAt: new Date(),
        Msg: msgContent,
        Img: false,
        createdBy: userData.uid,
        sentTo: secondUserData.uid,
        relation: `${userData.uid}/${secondUserData.uid}`,
      });
    }
    setImg("");
    setMsgContent("");

  };
  const Upload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    setFile(e.target.files[0]);
  };

  return (
    <div className="chat-area-footer pt-2 mt-3">
      <img src={img} alt="" width="50px" />
      <form onSubmit={handleSendMsg}>
        <div className="d-flex align-items-center">
          <div className="image-upload">
            <label htmlFor="file-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#0086ff"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </label>

            <input id="file-input" type="file" onChange={Upload} />
          </div>
          <InputEmoji
            value={msgContent}
            onChange={setMsgContent}
            cleanOnEnter
            placeholder="Type a message"
          />
          {msgContent || img ? (
            <button className="form-btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#0086ff"
                className="bi bi-send btn-icon mx-2 fs-4"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default ChatFooter;
