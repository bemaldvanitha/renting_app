// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpn__lubWX1wozW2g9ExOgm0ldNa5VW8I",
    authDomain: "rentingapp-82c50.firebaseapp.com",
    projectId: "rentingapp-82c50",
    storageBucket: "rentingapp-82c50.appspot.com",
    messagingSenderId: "67149880698",
    appId: "1:67149880698:web:387e8af0b64a600cf84ac3",
    measurementId: "G-G3VTNHJRCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };