import { useContext } from "react";
import { FirebaseContext } from "../../../context/FireContext";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { currentUserContext } from "../../../context/CurrentUser";
import User from "./User";

const AddMember = (props) => {
  const { usersCollection } = useContext(FirebaseContext);
  const [users] = useCollectionData(usersCollection);
  const { userData } = useContext(currentUserContext);

  return props.trigger ? (
    <>
      <div className="mention-list">
        {users
          ?.filter((data) => data.uid !== userData.uid)
          ?.map((data) => (
            <User
              active
              data={data}
              key={data.uid}
              setTrigger={props.setTrigger}
              addMember={props.addMember}
            />
          ))}
      </div>
    </>
  ) : (
    ""
  );
};

export default AddMember;
