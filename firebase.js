import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmngHK0KdoVG6G7hwA12DsDenmLtTCY4M",
  authDomain: "whatsapp-clone-72878.firebaseapp.com",
  projectId: "whatsapp-clone-72878",
  storageBucket: "whatsapp-clone-72878.appspot.com",
  messagingSenderId: "393007768322",
  appId: "1:393007768322:web:351f8203f81fb67e14d81b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
