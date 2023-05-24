import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiGvlbnSAtVvojzgC5SmazhlID7W5YBPg",
  authDomain: "totalfit-62adb.firebaseapp.com",
  projectId: "totalfit-62adb",
  storageBucket: "totalfit-62adb.appspot.com",
  messagingSenderId: "888434408143",
  appId: "1:888434408143:web:e7f1a87741bd5c6af595ba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


    