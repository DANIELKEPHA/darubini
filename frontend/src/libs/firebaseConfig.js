import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFzGtxXPr9ht-fc9By_0ymhcjTcxNSmT0",
  authDomain: "darubini-163ce.firebaseapp.com",
  projectId: "darubini-163ce",
  storageBucket: "darubini-163ce.firebasestorage.app",
  messagingSenderId: "544306606520",
  appId: "1:544306606520:web:bdf23c208151e9fe261f4d",
  measurementId: "G-08NRVG0MBH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
