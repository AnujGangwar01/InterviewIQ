
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-18489.firebaseapp.com",
  projectId: "interviewiq-18489",
  storageBucket: "interviewiq-18489.firebasestorage.app",
  messagingSenderId: "885464528598",
  appId: "1:885464528598:web:043ac43d646f3772217b77"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}