import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-4bed0.firebaseapp.com",
  projectId: "authexamnotes-4bed0",
  storageBucket: "authexamnotes-4bed0.firebasestorage.app",
  messagingSenderId: "1075066056567",
  appId: "1:1075066056567:web:45e1e8d2c6a53e7ffcfb72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
const analytics = getAnalytics(app);
