import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkI2RrHmkB2ZZ0MmFRqsSGPpOGQL92T9c",
  authDomain: "e-com-db-357e8.firebaseapp.com",
  projectId: "e-com-db-357e8",
  storageBucket: "e-com-db-357e8.appspot.com",
  messagingSenderId: "254389622098",
  appId: "1:254389622098:web:b385ec9ac18d42dbb2968b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
