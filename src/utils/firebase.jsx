 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDqh4_-5ZACJGw-gSH1jh_aGiKWmmT7QA",
  authDomain: "filmsage-6447b.firebaseapp.com",
  projectId: "filmsage-6447b",
  storageBucket: "filmsage-6447b.firebasestorage.app",
  messagingSenderId: "456877229745",
  appId: "1:456877229745:web:2cd8bec84c2ad87a7f4490",
  measurementId: "G-FK2DH2TC16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();