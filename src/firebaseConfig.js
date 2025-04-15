import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbGAAEbAf_2VsALgU0I5aFapZVDmUBWBM",
    authDomain: "buykaro-40c74.firebaseapp.com",
    projectId: "buykaro-40c74",
    storageBucket: "buykaro-40c74.firebasestorage.app",
    messagingSenderId: "838062899683",
    appId: "1:838062899683:web:031b77080d580c255da0d6",
    measurementId: "G-FV56N05DB0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);