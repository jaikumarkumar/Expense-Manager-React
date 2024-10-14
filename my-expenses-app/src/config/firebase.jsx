import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { FIREBASE_CONFIG } from "../constants/constants";

const firebaseConfig = {
    apiKey: FIREBASE_CONFIG.API_KEY,
    authDomain: FIREBASE_CONFIG.AUTH_DOMAIN,
    projectId: FIREBASE_CONFIG.PROJECT_ID,
    storageBucket: FIREBASE_CONFIG.STORAGE_BUCKET,
    messagingSenderId: FIREBASE_CONFIG.MESSAGING_SENDER_ID,
    appId: FIREBASE_CONFIG.APP_ID,
    measurementId: FIREBASE_CONFIG.MEASUREMENT_ID
};



export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)