// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBIPj0PEFeYcAB7RnryY3hoeKYtya0tzWU",
  authDomain: "labsvoting.firebaseapp.com",
  projectId: "labsvoting",
  storageBucket: "labsvoting.firebasestorage.app",
  messagingSenderId: "807124504271",
  appId: "1:807124504271:web:406417f6623e5d2d2971ba",
  measurementId: "G-QCW7GXL083"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };