import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD76ECc0_LL_LjL2Q93w-FK0uiHEBSAOc8',
  authDomain: 'clothing-inc.firebaseapp.com',
  projectId: 'clothing-inc',
  storageBucket: 'clothing-inc.appspot.com',
  messagingSenderId: '723915204533',
  appId: '1:723915204533:web:7398af3ca016929ff85bfc',
  measurementId: 'G-TWTDFY3M1D',
};

//Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if userAuth is null, return
  if (!userAuth) return;

  //get the reference of the document wiith userAuth id
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  //get the snapshot of the userRef and check exists property
  const snapshot = await userRef.get();

  //if the user doesnt exists in users collection
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //set user in users collection
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//created a new auth class from GoogleAuthProvider()
const provider = new firebase.auth.GoogleAuthProvider();

//Will provide a popup to select google account
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
