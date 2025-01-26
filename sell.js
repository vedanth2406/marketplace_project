// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCP16w9LzOyovb6yTMt-tQp5QH3LuctHSQ",
    authDomain: "tamu-marketplace.firebaseapp.com",
    projectId: "tamu-marketplace",
    storageBucket: "tamu-marketplace.firebasestorage.app",
    messagingSenderId: "334862416721",
    appId: "1:334862416721:web:83e4b754f2682b7849b170",
    measurementId: "G-EZ884BF75S"
  };


// Initialize Cloud Firestore and get a reference to the service

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const database = firebase.database();
const submitButton = document.querySelector('#post')

submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get input values
    

    // Check if inputs are not empty
    
});


async function save(title, price, description) {
    // Assuming you have a way to get the current user's username (you can use Firebase Authentication here)
    const username = "3KJFObXifucnxJdUskNNk7DRMyF2"; // Replace with actual username or user ID
    const titleInput = document.getElementById("title").value;
    const priceInput = document.getElementById("price").value;
    const descriptionInput = document.getElementById("description").value;

    console.log(titleInput)
    console.log(priceInput)
    console.log(descriptionInput)

    // Save data to Firebase Realtime Database
    //db.ref('users/' + username).set({
    const res = await db.collection('cities').doc(Date.now().toString()).set({
        title: titleInput,
        price: priceInput,
        description: descriptionInput
    })
    .then(() => {
        console.log("Data saved successfully!");
    })
    .catch((error) => {
        console.error("Error saving data: ", error);
    });
}

const postButton = document.querySelector('.button')
const popup = document.getElementById('popup')
const closePopup = document.getElementById('closePopup');
const backdrop = document.getElementById('backdrop');

postButton.addEventListener('click',()=>{
    popup.style.display = 'block';
    backdrop.style.display = 'block';
})

closePopup.addEventListener('click',()=>{
    popup.style.display = 'none';
    backdrop.style.display = 'none';
})

window.addEventListener('click', (event) => {
    if (event.target === backdrop) {
        popup.style.display = 'none';
        backdrop.style.display = 'none';
    }
    });



/*submitButton.addEventListener('click',  () => {
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
    console.log(titleInput.value)
})


var database = firebase.database()

function save(){
    const titleInput = document.getElementById("title");
    const priceInput = document.getElementById("price");
    const descriptionInput = document.getElementById("description");

    database.ref('users/' + username).set({
        title : title,
        price : price,
        description : description
    })

}
*/
































// DOM Elements

// const fileInput = document.getElementById("file");
// const submitButton = document.getElementById("submit");

// // Submit Button Handler
// submitButton.addEventListener("click", async (e) => {
//     e.preventDefault();

//     const title = titleInput.value.trim();
//     const price = priceInput.value.trim();
//     const description = descriptionInput.value.trim();
//     const file = fileInput.files[0];
//     console.log(title, price, description, file)

//     if (!title || !price || !description || !file) {
//         alert("All fields are required!");
//         return;
//     }


//     try {
//         // Upload image to Firebase Storage
//         // const fileRef = ref(storage, `products/${file.name}`);
//         // await uploadBytes(fileRef, file);
//         // const imageUrl = await getDownloadURL(fileRef);

//         // Add product to Firestore
//         await addDoc(collection(db, "products"), {
//             title,
//             price,
//             description,
//             imageUrl,
//             timestamp: Date.now(),
//         });

//         alert("Product successfully uploaded!");
//         titleInput.value = "";
//         priceInput.value = "";
//         descriptionInput.value = "";
//         fileInput.value = "";
//     } catch (error) {
//         console.error("Error uploading product:", error);
//         alert("Failed to upload product. Please try again.");
//     }
// });