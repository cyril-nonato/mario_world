import * as firebase from 'firebase/app'
import 'firebase/firestore' // 👈 If you're using firestore
import 'firebase/auth'
import ReduxSagaFirebase from 'redux-saga-firebase'

const myFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkaOc9C1l2xO4n9RPX6cgwfWSZKEv_BLI",
  authDomain: "mario-world-e5bab.firebaseapp.com",
  databaseURL: "https://mario-world-e5bab.firebaseio.com",
  projectId: "mario-world-e5bab",
  storageBucket: "mario-world-e5bab.appspot.com",
  messagingSenderId: "545259147193",
  appId: "1:545259147193:web:18a9cd8eb4662948077068",
  measurementId: "G-PQ7HQT5H31"
});

const rsf = new ReduxSagaFirebase(myFirebaseApp);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firestore, auth, firebase };
export default rsf;