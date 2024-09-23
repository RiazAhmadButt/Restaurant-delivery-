// const firebaseConfig = {
//     apiKey: "AIzaSyDep3EqcGsM-xAbR1MlPoRwMqX7qaru3Xc",
//     authDomain: "users-4498a.firebaseapp.com",
//     projectId: "users-4498a",
//     storageBucket: "users-4498a.appspot.com",
//     messagingSenderId: "933516139138",
//     appId: "1:933516139138:web:8a93ca7b4ccb1536a4329b",
//     measurementId: "G-57X5F88CT2"
//   };

// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDep3EqcGsM-xAbR1MlPoRwMqX7qaru3Xc",
  authDomain: "users-4498a.firebaseapp.com",
  projectId: "users-4498a",
  storageBucket: "users-4498a.appspot.com",
  messagingSenderId: "933516139138",
  appId: "1:933516139138:web:8a93ca7b4ccb1536a4329b",
  measurementId: "G-57X5F88CT2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// Export services for use in other parts of your app
export { auth, db, storage };
export default firebaseApp;
