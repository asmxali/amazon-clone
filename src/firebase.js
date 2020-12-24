import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvQZH-wiblPztC-FyCOYwCx4jriVPEzfg",
  authDomain: "clone-df399.firebaseapp.com",
  projectId: "clone-df399",
  storageBucket: "clone-df399.appspot.com",
  messagingSenderId: "312166948459",
  appId: "1:312166948459:web:a14d0a4f34ec46b822db2e",
  measurementId: "G-6XKR7Z1SCN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
