// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpA1kzjMEmKzsUILuC2xoWotArTNAJZMk",
  authDomain: "kuti-f89f4.firebaseapp.com",
  projectId: "kuti-f89f4",
  storageBucket: "kuti-f89f4.appspot.com",
  messagingSenderId: "126067994763",
  appId: "1:126067994763:web:6bc0193327ba6a43ef648e",
  measurementId: "G-7DQFEKTNZH"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp)
