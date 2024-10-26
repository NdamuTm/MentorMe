import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDG1J5B09Gqm402f34t7PuOCQ-mB8xzRXA",
  authDomain: "mentorme-f3485.firebaseapp.com",
  projectId: "mentorme-f3485",
  storageBucket: "mentorme-f3485.appspot.com",
  messagingSenderId: "609206656959",
  appId: "1:609206656959:web:a1d3b9444289d3f67d8b0a",
  measurementId: "G-CEQLDP2J84"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);