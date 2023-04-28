import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrcM40Q0fdEcqLI6e2ARMlyaBcJnJ0vMo",
  authDomain: "money-tracker-297c6.firebaseapp.com",
  projectId: "money-tracker-297c6",
  storageBucket: "money-tracker-297c6.appspot.com",
  messagingSenderId: "812491775889",
  appId: "1:812491775889:web:bab078413c1525747fc430",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
