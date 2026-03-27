// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2Bx2bIGcq6Sx5AJMDp_l0tjPx6-cbk50",
  authDomain: "purvsoft-1b983.firebaseapp.com",
  projectId: "purvsoft-1b983",
  storageBucket: "purvsoft-1b983.firebasestorage.app",
  messagingSenderId: "410712827230",
  appId: "1:410712827230:web:2f876897e4ef6a51225bcf",
  measurementId: "G-1Z6WJ7G2WX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
