import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD4cKd5SDc-GX14YqScCfAT4l4KbDSzPI",
  authDomain: "invoice-app-f5054.firebaseapp.com",
  projectId: "invoice-app-f5054",
  storageBucket: "invoice-app-f5054.appspot.com",
  messagingSenderId: "239854443031",
  appId: "1:239854443031:web:22c74b09d473fa9e85da52",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase
export { db };
