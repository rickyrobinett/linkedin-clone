import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA33dAMsyv8GedWFavDqUpoQmzm4Z9k3do",
  authDomain: "linkedin-clone-3c9dc.firebaseapp.com",
  projectId: "linkedin-clone-3c9dc",
  storageBucket: "linkedin-clone-3c9dc.appspot.com",
  messagingSenderId: "519698496463",
  appId: "1:519698496463:web:01c1130ecee019e08a30ba",
  measurementId: "G-HBNZ7TCM70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
