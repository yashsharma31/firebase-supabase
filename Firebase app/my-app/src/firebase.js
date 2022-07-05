// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQnMeOZDNtkaWAVLyOAL3M3u57C3A9Zuo",
  authDomain: "fir-app-v1-796d0.firebaseapp.com",
  projectId: "fir-app-v1-796d0",
  storageBucket: "fir-app-v1-796d0.appspot.com",
  messagingSenderId: "487713733566",
  appId: "1:487713733566:web:e2af0733017a321f3ed7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)