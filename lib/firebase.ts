import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v9+
const firebaseConfig = {
    apiKey: "AIzaSyA-Be9IIqMZnazjvGZqjyOy3zku_eYwpEY",
    authDomain: "kevin-sajan.firebaseapp.com",
    projectId: "kevin-sajan",
    storageBucket: "kevin-sajan.appspot.com",
    messagingSenderId: "929116538738",
    appId: "1:929116538738:web:82ce8cb90c786828913feb",
    measurementId: "G-7LG285JVGH"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export default app;