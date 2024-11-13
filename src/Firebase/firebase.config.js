// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_SECRET_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_SECRET_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_SECRET_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_SECRET_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SECRET_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_SECRET_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// export this
export const auth = getAuth(app);