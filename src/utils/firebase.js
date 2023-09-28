
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-nextjs-application.firebaseapp.com",
  projectId: "blog-nextjs-application",
  storageBucket: "blog-nextjs-application.appspot.com",
  messagingSenderId: "438380735776",
  appId: "1:438380735776:web:9d25212f6fa22e2754fb45",
  measurementId: "G-QEK0SG2G60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
