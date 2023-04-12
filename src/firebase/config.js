import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FB_API_KEY,
  // authDomain: "eshop-ea8e7.firebaseapp.com",
  // projectId: "eshop-ea8e7",
  // storageBucket: "eshop-ea8e7.appspot.com",
  // messagingSenderId: "146569443233",
  // appId: "1:146569443233:web:46db000fc2c897f3b73de0",

  // apiKey: "AIzaSyDoGQohkQQBFKpvtgAaHjgaeXWXJtNkT2s",
  // authDomain: "eshop-80b6e.firebaseapp.com",
  // projectId: "eshop-80b6e",
  // storageBucket: "eshop-80b6e.appspot.com",
  // messagingSenderId: "421687203762",
  // appId: "1:421687203762:web:be0efa9d7acdbb387ef6ab"

  apiKey: "AIzaSyCtyfdaas2PNKGrvVK6OeD77lHqT9AMjQo",
  authDomain: "eshop-14222.firebaseapp.com",
  projectId: "eshop-14222",
  storageBucket: "eshop-14222.appspot.com",
  messagingSenderId: "113657898347",
  appId: "1:113657898347:web:5cc4e071267ffd2ccb582e"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
