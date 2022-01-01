import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, FirebaseContext } from '../../context/FireContext';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './popup.css';
const Comments = ({ comments, removeComment, time }) => {
  const { usersCollection } = useContext(FirebaseContext);
  const [userData] = useAuthState(auth);
  const query =
    userData?.uid && usersCollection.where('uid', '==', userData.uid);
  const [currentUser] = useCollectionData(query, { idField: 'id' });
  var x;
  var z;
  currentUser ? (x = currentUser[0]?.photoURL) : (x = false);
  currentUser ? (z = currentUser[0]?.displayName) : (z = false);

  return comments.map((comment, index) => (
    <>
      <div key={index}>
        <div className='row align-items-center justify-content-between mt-4'>
          <div className='col-6'>
            <div className='d-flex'>
              <div className='me-3'>
                <img src={x} alt='' className='profile-img ' title={z} />
              </div>
              <div>{z}</div>
            </div>
          </div>

          <div className='col-4 text-end  text-muted'>{comment.time}</div>
        </div>
        <div className='my-3 ps-2 d-flex justify-content-between shadow-sm border rounded'>
          <div key={comment.id}>
            <span style={{ color: '#008ad3' }}>
              {comment.text.match(/@\w+/g)}
            </span>

            <span> {comment.text.replace(/@\w+/g, '')} </span>
          </div>
          <span
            className='clear-icon'
            onClick={() => removeComment(comment.id)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-x-lg'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'
              />
              <path
                fillRule='evenodd'
                d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  ));
};

export default Comments;
