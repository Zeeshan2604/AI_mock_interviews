
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8xukx1-maXmeqBFBVVSiQ0-WUQWJUYB0",
  authDomain: "hirex-a5584.firebaseapp.com",
  projectId: "hirex-a5584",
  storageBucket: "hirex-a5584.firebasestorage.app",
  messagingSenderId: "1086254531882",
  appId: "1:1086254531882:web:f4abc7ae3a5d50bade8a53",
  measurementId: "G-C7DCEYG0L8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);