import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Replace with your Firebase config from Step 4
const firebaseConfig = {
    apiKey: "AIzaSyD3Mes9zWfDTisanx7r5DpSiqGyBCxKp1s",
    authDomain: "my-simple-app-45f79.firebaseapp.com",
    projectId: "my-simple-app-45f79",
    storageBucket: "my-simple-app-45f79.firebasestorage.app",
    messagingSenderId: "764830146124",
    appId: "1:764830146124:web:c78c4ace3275f5478d5ee9"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };