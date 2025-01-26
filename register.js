// Import necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP16w9LzOyovb6yTMt-tQp5QH3LuctHSQ",
  authDomain: "tamu-marketplace.firebaseapp.com",
  projectId: "tamu-marketplace",
  storageBucket: "tamu-marketplace.appspot.com",
  messagingSenderId: "334862416721",
  appId: "1:334862416721:web:83e4b754f2682b7849b170",
  measurementId: "G-EZ884BF75S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register function
window.registerUser = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User registered: ", user);
      // Redirect or show success message
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.error("Error: Email already in use.");
        alert("This email is already in use. Please use a different email or log in.");
      } else {
        console.error("Error: ", error.message);
      }
    });
};

// Login function
window.loginUser = () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in: ", user);
      // Redirect to dashboard.html
      window.location.href = 'market.html';
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        console.error("Error: Wrong password.");
        alert("Incorrect password. Please try again.");
      } else if (error.code === 'auth/user-not-found') {
        console.error("Error: User not found.");
        alert("No user found with this email. Please sign up first.");
      } else {
        console.error("Error: ", error.message);
        alert("Error: " + error.message);
      }
    });
};