// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJVK8t4Ux_c4SEqvCFI5MAuqrMmGeP9L8",
  authDomain: "instaclone-b08c3.firebaseapp.com",
  projectId: "instaclone-b08c3",
  storageBucket: "instaclone-b08c3.appspot.com",
  messagingSenderId: "34166369211",
  appId: "1:34166369211:web:4218d74f6a58fed2ecb29e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };