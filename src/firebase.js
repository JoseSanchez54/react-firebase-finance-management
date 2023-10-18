import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABr6USsF1gKurbGzo4EwQ5fZPie8ok-tw",
  authDomain: "trading-f5020.firebaseapp.com",
  databaseURL: "https://trading-f5020.europe-west1.firebasedatabase.app",
  projectId: "trading-f5020",
  storageBucket: "trading-f5020.appspot.com",
  messagingSenderId: "975334937476",
  appId: "1:975334937476:web:e559762848c75ea61a83d1",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((res) => console.log("Sign In with Google done!"))
    .catch((err) => console.log(err));
};

export const signOut = () => {
  auth
    .signOut()
    .then((res) => console.log("Successfully Sign Out."))
    .catch((err) => console.log(err));
};
