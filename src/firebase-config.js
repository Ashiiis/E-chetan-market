// Import the required Firebase functions
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDunHvRupy1ERkvgoh4b-BK3t3IgqXjm5w",
  authDomain: "chetan-market.firebaseapp.com",
  projectId: "chetan-market",
  storageBucket: "chetan-market.firebasestorage.app",
  messagingSenderId: "182284352513",
  appId: "1:182284352513:web:4d10cee6f19be24d3b1400",
  measurementId: "G-YKYBQ9GB38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth instance
export const auth = getAuth(app);

