// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBOhKJZPnirydLH6zs85f3GyKfQ6AibF8",
  authDomain: "gc-investments.firebaseapp.com",
  projectId: "gc-investments",
  storageBucket: "gc-investments.appspot.com",
  messagingSenderId: "356132538974",
  appId: "1:356132538974:web:60c115ad9c695d7e1382cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)