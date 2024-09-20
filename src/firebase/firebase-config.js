import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDep3EqcGsM-xAbR1MlPoRwMqX7qaru3Xc",
    authDomain: "users-4498a.firebaseapp.com",
    projectId: "users-4498a",
    storageBucket: "users-4498a.appspot.com",
    messagingSenderId: "933516139138",
    appId: "1:933516139138:web:8a93ca7b4ccb1536a4329b",
    measurementId: "G-57X5F88CT2"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebaseApp;
