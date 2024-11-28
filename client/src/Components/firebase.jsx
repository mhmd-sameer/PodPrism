// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxPTpRHtiVqo9ar6KDlWw7_NjCwF61Ay8",
  authDomain: "pod-prism.firebaseapp.com",
  projectId: "pod-prism",
  storageBucket: "pod-prism.firebasestorage.app",
  messagingSenderId: "19965398009",
  appId: "1:19965398009:web:2d8f8fd03a36dde2014b28",
  measurementId: "G-C0V3F0DLZY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth}