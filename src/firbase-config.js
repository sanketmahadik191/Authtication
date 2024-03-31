// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase/app";
import { getAuth } from "./firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpnUW2TrBDDMlG02O4nOJQYU0JjYqW6ck",
  authDomain: "assignament-auth.firebaseapp.com",
  projectId: "assignament-auth",
  storageBucket: "assignament-auth.appspot.com",
  messagingSenderId: "908427165142",
  appId: "1:908427165142:web:8680b2f3506a49ad8d3877",
  measurementId: "G-YLL3BBSNEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);