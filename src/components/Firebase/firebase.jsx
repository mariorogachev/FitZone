import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyC3sLIbRGiSq6e12YLrHEz6OwzPqven5aA",
  authDomain: "fitzonelast.firebaseapp.com",
  projectId: "fitzonelast",
  storageBucket: "fitzonelast.appspot.com",
  messagingSenderId: "239081987995",
  appId: "1:239081987995:web:f780f05f8e29c0fe2d4b3e"
};


const app = initializeApp(firebaseConfig);

export default app;