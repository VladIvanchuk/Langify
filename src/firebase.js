import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYmC3k4kbMi0_dT7Y-LSF49pfPFwFfnqQ",
  authDomain: "reactschool-4a94f.firebaseapp.com",
  projectId: "reactschool-4a94f",
  storageBucket: "reactschool-4a94f.appspot.com",
  messagingSenderId: "735490155482",
  appId: "1:735490155482:web:72d1799f1dbb7f05dd56e3",
  measurementId: "G-GBCGP1D2SC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
