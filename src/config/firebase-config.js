// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQhtKp3kQXwYeq-5oBqnPjt1SY_aHcIf0",
  authDomain: "questify-3caa2.firebaseapp.com",
  projectId: "questify-3caa2",
  storageBucket: "questify-3caa2.firebasestorage.app",
  messagingSenderId: "489719542914",
  appId: "1:489719542914:web:da7e4efac534150f36b09b",
  measurementId: "G-E4KFH8823E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);