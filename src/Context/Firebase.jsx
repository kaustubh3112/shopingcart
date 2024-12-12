import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBPcZXqlJ-sqmustpvzYdarytxfMjeWggM",
  authDomain: "shopingcart-e652c.firebaseapp.com",
  projectId: "shopingcart-e652c",
  storageBucket: "shopingcart-e652c.firebasestorage.app",
  messagingSenderId: "291531391549",
  appId: "1:291531391549:web:4ecd56ec6b00913d656054",
  databaseURL: "https://shopingcart-e652c-default-rtdb.firebaseio.com",
};

const fireBaseApp = initializeApp(firebaseConfig);
const firbaseAuth = getAuth(fireBaseApp);
const database = getDatabase(fireBaseApp);
const googleProvider = new GoogleAuthProvider();
const FireBaseContext = createContext(null);
export const useFireBase = () => useContext(FireBaseContext);

export const FireBaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signupWithUserPassword = (email, password) => {
    return createUserWithEmailAndPassword(firbaseAuth, email, password);
  };

  const signInWithUserPassword = (email, password) => {
    return signInWithEmailAndPassword(firbaseAuth, email, password);
  };

  const signInWithGoogle = () => signInWithPopup(firbaseAuth, googleProvider);

  useEffect(() => {
    onAuthStateChanged(firbaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const isLoggedIn = user ? true : false;

  return (
    <FireBaseContext.Provider
      value={{
        signupWithUserPassword,
        signInWithUserPassword,
        signInWithGoogle,
        isLoggedIn,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
};
