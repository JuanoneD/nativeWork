// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore }from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcJCNWCRgPnY2VxrQtDpxbe63xSRYwzzk",
  authDomain: "reactnative-58552.firebaseapp.com",
  projectId: "reactnative-58552",
  storageBucket: "reactnative-58552.appspot.com",
  messagingSenderId: "607432053389",
  appId: "1:607432053389:web:5e36e7f3253d73d43fc8c4",
  measurementId: "G-WWKRXGWL8B"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)