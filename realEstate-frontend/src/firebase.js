// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-59941.firebaseapp.com",
  projectId: "mern-estate-59941",
  storageBucket: "mern-estate-59941.appspot.com",
  messagingSenderId: "21037990888",
  appId: "1:21037990888:web:d33d28a9e6811c7cc8da5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
