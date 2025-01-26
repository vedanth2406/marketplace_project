// Import Firebase dependencies
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP16w9LzOyovb6yTMt-tQp5QH3LuctHSQ",
    authDomain: "tamu-marketplace.firebaseapp.com",
    projectId: "tamu-marketplace",
    storageBucket: "tamu-marketplace.firebasestorage.app",
    messagingSenderId: "334862416721",
    appId: "1:334862416721:web:83e4b754f2682b7849b170",
    measurementId: "G-EZ884BF75S"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// DOM Elements
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const descriptionInput = document.getElementById("description");
const fileInput = document.getElementById("file");
const submitButton = document.getElementById("submit");

// Submit Button Handler
submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const price = priceInput.value.trim();
    const description = descriptionInput.value.trim();
    const file = fileInput.files[0];

    if (!title || !price || !description || !file) {
        alert("All fields are required!");
        return;
    }

    try {
        // Upload image to Firebase Storage
        const fileRef = ref(storage, `products/${file.name}`);
        await uploadBytes(fileRef, file);
        const imageUrl = await getDownloadURL(fileRef);

        // Add product to Firestore
        await addDoc(collection(db, "products"), {
            title,
            price,
            description,
            imageUrl,
            timestamp: Date.now(),
        });

        alert("Product successfully uploaded!");
        titleInput.value = "";
        priceInput.value = "";
        descriptionInput.value = "";
        fileInput.value = "";
    } catch (error) {
        console.error("Error uploading product:", error);
        alert("Failed to upload product. Please try again.");
    }
});
