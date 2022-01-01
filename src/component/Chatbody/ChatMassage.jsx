const ChatMassage = ({ owner, msgData, photoURl, msgTime, Img }) => {
  return (
    <>
      <div className={`chat-msg ${owner && "owner"} d-flex align-items-center`}>
        <div className="chat-msg-profile align-self-end mb-2">
          <img className="chat-msg-img" src={photoURl} alt="" />
        </div>
        <div className="chat-msg-content">
          {Img && (
            <div style={{ width: "200px" }}>
              {" "}
              <img className="img-thumbnail" src={Img} alt="" />
            </div>
          )}
          <div className="chat-msg-text d-flex">
            {msgData}
            <div className="chat-msg-date text-end d-flex align-items-end">
              <div>
                {msgTime.toDate().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <span className="check">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-all"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMassage;
