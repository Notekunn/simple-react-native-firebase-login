import { initializeApp } from 'firebase/app';
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB_aXonRbiKE4fTXE8_2GhroP-pMRBrp08',
  authDomain: 'login-screen-26f28.firebaseapp.com',
  projectId: 'login-screen-26f28',
  storageBucket: 'login-screen-26f28.appspot.com',
  messagingSenderId: '78578281593',
  appId: '1:78578281593:web:71c82f87a2e43bdd68b8a8',
  measurementId: 'G-Y63N1JDXE0',
};

const app = initializeApp(firebaseConfig);
export default app;
