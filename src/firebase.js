// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5frF61ykSMOg6UXp-HNDa6mBP1MUfji4",
  authDomain: "reactjsproject-a662b.firebaseapp.com",
  projectId: "reactjsproject-a662b",
  storageBucket: "reactjsproject-a662b.appspot.com",
  messagingSenderId: "321408188787",
  appId: "1:321408188787:web:8995d5a23617dba986c506",
  measurementId: "G-06MRTHQFBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
