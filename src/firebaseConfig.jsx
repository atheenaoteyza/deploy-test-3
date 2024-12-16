// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4o41CegAqSN--2gp-fDd3e8MK3CbdRFU",
  authDomain: "deploy-test-3-c116d.firebaseapp.com",
  databaseURL:
    "https://deploy-test-3-c116d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "deploy-test-3-c116d",
  storageBucket: "deploy-test-3-c116d.firebasestorage.app",
  messagingSenderId: "561211374288",
  appId: "1:561211374288:web:d2f0086063462a793a7cd5",
  measurementId: "G-MHW55WX1QW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
