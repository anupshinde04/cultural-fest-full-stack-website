// Import the Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyDFi7vqhqN5cjgS_jtmsP96M_OEQcM33Oc",
    authDomain: "rhythm-ember.firebaseapp.com",
    projectId: "rhythm-ember",
    storageBucket: "rhythm-ember.appspot.com",
    messagingSenderId: "1035922542587",
    appId: "1:1035922542587:web:208d66b1c15d74fcbc455e",
    measurementId: "G-VF2EF5V3BG"
  };  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase authentication object
export const auth = getAuth(app);
