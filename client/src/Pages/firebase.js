//firebase
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAeU6ZSPhsceWwDyw2tiiXPQ41b7sRdbVA",
  authDomain: "fwda3-b1862.firebaseapp.com",
  projectId: "fwda3-b1862",
  storageBucket: "fwda3-b1862.appspot.com",
  messagingSenderId: "970820034295",
  appId: "1:970820034295:web:ec37ad6c58dde286f3bdf2"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//login

const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

//register

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //reset password

  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //logout

  const logout = () => {
    auth.signOut();
  };
  export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };

//Citation
// Faruq Yussuf, 2021,Handling user authentication with Firebase in your React apps, LogRocket
// https://blog.logrocket.com/user-authentication-firebase-react-apps/?fbclid=IwAR1x8qWWpVDRmrIOWiv-gWRf3Wc_RA_bH99tHwBpHxzo5Q8zWRQ8cYlCDJ4
