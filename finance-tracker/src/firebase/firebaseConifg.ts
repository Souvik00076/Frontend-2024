// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNNdCm3h6CFlfHpahkBmhDrP2cs-WlJhQ",
  authDomain: "my-journey-till-october.firebaseapp.com",
  projectId: "my-journey-till-october",
  storageBucket: "my-journey-till-october.appspot.com",
  messagingSenderId: "231310959560",
  appId: "1:231310959560:web:be18a992893fd51c7596fd",
  measurementId: "G-LDXN81460Y",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
