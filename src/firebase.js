import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmKP3VCvhkEwPyo_gbRwfmF_kKFv-r8TI",
    authDomain: "react-firebase-app-54fd0.firebaseapp.com",
    projectId: "react-firebase-app-54fd0",
    storageBucket: "react-firebase-app-54fd0.firebasestorage.app",
    messagingSenderId: "992838796136",
    appId: "1:992838796136:web:a1d7131ea0ffb88dafccdd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);