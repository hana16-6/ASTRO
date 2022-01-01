import { createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyAEo32mGi1ASyy-k39OE9w5ZOtRV6l4g9E',
  authDomain: 'astro-ea949.firebaseapp.com',
  projectId: 'astro-ea949',
  storageBucket: 'astro-ea949.appspot.com',
  messagingSenderId: '939290097592',
  appId: '1:939290097592:web:1de5a5a5f3c4269e48014d',
  measurementId: 'G-SQR0M92TNW',
});
export var FirebaseContext = createContext();
export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var storage = firebase.storage();

var messagesCollection = firestore.collection('messages');
var usersCollection = firestore.collection('users');
export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        firestore,
        messagesCollection,
        usersCollection,
        storage,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const createUserDocument = async (user, additionalData, photoURL) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, uid } = user;
    const { displayName } = additionalData;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        uid,
      });
    } catch (error) {
      throw ('Error in creating user', error);
    }
  }
};
