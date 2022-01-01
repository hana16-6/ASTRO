import { useContext } from 'react';
import { FirebaseContext } from '../context/FireContext';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import FriendInbox from './friendInbox';
import { currentUserContext } from '../context/CurrentUser';

const FriendList = () => {
  const { usersCollection } = useContext(FirebaseContext);
  const [users] = useCollectionData(usersCollection);
  const { userData } = useContext(currentUserContext);

  return (
    <>
      {users
        ?.filter(data => data.uid !== userData.uid)
        ?.map(data => (
          <FriendInbox active data={data} key={data.uid} />
        ))}
    </>
  );
};

export default FriendList;
