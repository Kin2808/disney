import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCnBemujDZdndu4LGlr7bKBLK64_TJgV4Q",
  authDomain: "disneyclone-5ea7b.firebaseapp.com",
  projectId: "disneyclone-5ea7b",
  storageBucket: "disneyclone-5ea7b.appspot.com",
  messagingSenderId: "1020257640327",
  appId: "1:1020257640327:web:8dd8294194d0aa8e43bd22",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
