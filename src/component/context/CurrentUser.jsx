import { createContext, useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, FirebaseContext } from "./FireContext";
import "react-toastify/dist/inject-style";
import "react-toastify/dist/ReactToastify.min.css";

export const currentUserContext = createContext();
const CurrentUserProvider = ({ children }) => {
  const {  usersCollection } = useContext(FirebaseContext);
  const [userData] = useAuthState(auth);
  const query =
    userData?.uid && usersCollection.where("uid", "==", userData.uid);
  const [currentUser] = useCollectionData(query, { idField: "id" });
  useEffect(() => {
    if (currentUser && currentUser?.length === 0&& userData?.providerData[0]?.providerId === 'google.com') {
      usersCollection.add({
        displayName: userData.displayName,
        photoURL: userData.photoURL,
        uid: userData.uid,
      });
    }
    // eslint-disable-next-line
  }, [currentUser]);
  
  return (
    <currentUserContext.Provider value={{ userData }}>
      {children}
    </currentUserContext.Provider>
  );
};

export default CurrentUserProvider;
