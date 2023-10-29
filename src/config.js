// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBQ6KZQ7NZVykiOn8Qw7X_2ghTTzyjyDE",
    authDomain: "react-auth-33d6e.firebaseapp.com",
    projectId: "react-auth-33d6e",
    storageBucket: "react-auth-33d6e.appspot.com",
    messagingSenderId: "73863608696",
    appId: "1:73863608696:web:3a17a46fe9fa021955b08d",
    measurementId: "G-569BQB2CYZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export default app;
  