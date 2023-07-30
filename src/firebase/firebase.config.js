// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.NEXT_APP_apiKey,
  // authDomain: process.env.NEXT_APP_authDomain,
  // projectId: process.env.NEXT_APP_projectId,
  // storageBucket: process.env.NEXT_APP_storageBucket,
  // messagingSenderId: process.env.NEXT_APP_messagingSenderId,
  // appId: process.env.NEXT_APP_appId,

  apiKey: "AIzaSyDMcCOZL0GVyl3IGdHJrw03tfV64nAAjYo",
  authDomain: "next-auth-techbd-d8cbe.firebaseapp.com",
  projectId: "next-auth-techbd-d8cbe",
  storageBucket: "next-auth-techbd-d8cbe.appspot.com",
  messagingSenderId: "780875707533",
  appId: "1:780875707533:web:a1fe2d4bbb0d601cb55ec4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
