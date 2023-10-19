// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "blogapp-399618.firebaseapp.com",
  projectId: "blogapp-399618",
  storageBucket: "blogapp-399618.appspot.com",
  messagingSenderId: "41713448671",
  appId: "1:41713448671:web:a45c2a247559dace961b6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);