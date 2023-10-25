// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3JoI9kdnKbvVfbFNTjLDBiOzW3u-c8HQ",
  authDomain: "react-app-d744c.firebaseapp.com",
  projectId: "react-app-d744c",
  storageBucket: "react-app-d744c.appspot.com",
  messagingSenderId: "651810783538",
  appId: "1:651810783538:web:99fcd6313701db0a4ad72b",
  measurementId: "G-HNSFVKH9S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;