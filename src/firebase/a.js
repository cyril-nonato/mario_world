import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkaOc9C1l2xO4n9RPX6cgwfWSZKEv_BLI",
  authDomain: "mario-world-e5bab.firebaseapp.com",
  databaseURL: "https://mario-world-e5bab.firebaseio.com",
  projectId: "mario-world-e5bab",
  storageBucket: "mario-world-e5bab.appspot.com",
  messagingSenderId: "545259147193",
  appId: "1:545259147193:web:18a9cd8eb4662948077068",
  measurementId: "G-PQ7HQT5H31"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;

    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
        ...addtionalData
      })
    } catch (error) {
      console.log('Error', error.message)
    }
  }

  return userRef;
}

export const convertQuerySnapshot = (querysnaphot) => {
  const docs = querysnaphot.docs;
  const data = docs.map(doc => {
    if(doc.exists) {
      return doc.data();
    } 
    return null;
  });
  console.log(data);
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' });

export {firebase};