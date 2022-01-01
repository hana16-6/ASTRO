import { useContext } from "react";
import { FirebaseContext } from "../../context/FireContext";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { currentUserContext } from "../../context/CurrentUser";
import UserMention from "./userMention";
const Mention = (props) => {
  const { usersCollection } = useContext(FirebaseContext);
  const [users] = useCollectionData(usersCollection);
  const { userData } = useContext(currentUserContext);

  return props.trigger ? (
    <>
      <div className="mention-list">
        {users
          ?.filter((data) => data.uid !== userData.uid)
          ?.map((data) => (
            <UserMention
              active
              data={data}
              key={data.uid}
              setTrigger={props.setTrigger}
              setInputVal={props.setInputVal}
              setUser={props.setUser}
              user={props.user}
            />
          ))}
      </div>
    </>
  ) : (
    ""
  );
};

export default Mention;
