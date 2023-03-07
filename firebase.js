// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE,
  authDomain: "rentalink-cdb8e.firebaseapp.com",
  databaseURL: "https://rentalink-cdb8e-default-rtdb.firebaseio.com",
  projectId: "rentalink-cdb8e",
  storageBucket: "rentalink-cdb8e.appspot.com",
  messagingSenderId: "1009767206698",
  appId: "1:1009767206698:web:2448fa561ed89ad7659853",
  measurementId: "G-YLVL21J568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);