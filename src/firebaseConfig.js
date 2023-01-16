// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3jz_sK29qIbwEFd8654NHxgnBABLmxDU",
  authDomain: "coder-proyectofinalreact.firebaseapp.com",
  projectId: "coder-proyectofinalreact",
  storageBucket: "coder-proyectofinalreact.appspot.com",
  messagingSenderId: "349862970390",
  appId: "1:349862970390:web:d46a32ee8d68559653e137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
