import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-Be9IIqMZnazjvGZqjyOy3zku_eYwpEY",
    authDomain: "kevin-sajan.firebaseapp.com",
    projectId: "kevin-sajan",
    storageBucket: "kevin-sajan.appspot.com",
    messagingSenderId: "929116538738",
    appId: "1:929116538738:web:82ce8cb90c786828913feb",
    measurementId: "G-7LG285JVGH"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();