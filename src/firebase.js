
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC3sLIbRGiSq6e12YLrHEz6OwzPqven5aA",
  authDomain: "fitzonelast.firebaseapp.com",
  projectId: "fitzonelast",
  storageBucket: "fitzonelast.appspot.com",
  messagingSenderId: "239081987995",
  appId: "1:239081987995:web:f780f05f8e29c0fe2d4b3e"
};


const app = initializeApp(firebaseConfig);
const database = getAuth(app)
const provider = new GoogleAuthProvider();
export {provider,database};