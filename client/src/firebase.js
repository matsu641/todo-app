// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuqwLG6ObKJSQBwK5Oz9H8bGfDtlTrVeg",
  authDomain: "todo-app-bcfd8.firebaseapp.com",
  projectId: "todo-app-bcfd8",
  storageBucket: "todo-app-bcfd8.firebasestorage.app",
  messagingSenderId: "733221040890",
  appId: "1:733221040890:web:d5fe8505ca32c1a4fccf43",
  measurementId: "G-31J0F6Y550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);