// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsFUOhEKBO6I1M7jgRzbdwVOE61T9nh2w",
  authDomain: "chat-app-8ff8c.firebaseapp.com",

  projectId: "chat-app-8ff8c",
  storageBucket: "chat-app-8ff8c.appspot.com",
  messagingSenderId: "727396393135",
  appId: "1:727396393135:web:42eb1784206f8e6c58f45a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const db = getFirestore(app);