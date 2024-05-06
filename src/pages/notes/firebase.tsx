
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyASifrVZnF700QMRH4cwM7IYXBL8zz0OdA",
    authDomain: "it35-saplot.firebaseapp.com",
    projectId: "it35-saplot",
    storageBucket: "it35-saplot.appspot.com",
    messagingSenderId: "266392681636",
    appId: "1:266392681636:web:5096fae068c03af6253a31",
    measurementId: "G-R5LW53C3NP"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}
