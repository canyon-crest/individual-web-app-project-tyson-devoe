import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6bgZVY7EadPehk_l-C5nYqbX_1p1v-Hg",
    authDomain: "react-firebase-app2-dae47.firebaseapp.com",
    projectId: "react-firebase-app2-dae47",
    storageBucket: "react-firebase-app2-dae47.firebasestorage.app",
    messagingSenderId: "1029619835603",
    appId: "1:1029619835603:web:ca1fbfa84854b594cbea26"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();