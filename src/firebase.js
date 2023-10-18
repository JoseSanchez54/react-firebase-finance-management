import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDA7fpeX0vNpE_tvr06R8I82TYXzG7RZOQ",
  authDomain: "gestor-7fa0d.firebaseapp.com",
  projectId: "gestor-7fa0d",
  storageBucket: "gestor-7fa0d.appspot.com",
  messagingSenderId: "637785696793",
  appId: "1:637785696793:web:860ee1cfb75d17130fd888",
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
