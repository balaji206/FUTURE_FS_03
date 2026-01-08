import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRZpTRWTMxqG97jMsRGAOWDdh-bq-P2hs",
  authDomain: "rolex-rebrand-protocol.firebaseapp.com",
  projectId: "rolex-rebrand-protocol",
  storageBucket: "rolex-rebrand-protocol.firebasestorage.app",
  messagingSenderId: "994879903346",
  appId: "1:994879903346:web:3a8e5b06e97c1f724194eb",
  measurementId: "G-L7HY1G9MJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (This is your Database)
export const db = getFirestore(app);