// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getDatabase, ref, set } from "../node_modules/firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_7RzeZO5ll8iF0_0heXpTb5Dhra2fcOE",
    authDomain: "williams-plumbing-solutions.firebaseapp.com",
    projectId: "williams-plumbing-solutions",
    storageBucket: "williams-plumbing-solutions.appspot.com",
    messagingSenderId: "757654487126",
    appId: "1:757654487126:web:d1aef59d2bc73155e17bf7"
  };

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const db = getDatabase(fireBaseApp);

// handleForm.js
export const handleRequestServiceSubmit = (event : any) => {
  console.log("Form submitted");
  // Add your form handling logic here
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = "+1" + document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;

  const data = {
    name,
    phone,
    email,
    service,
  };
  console.log(data);

  // Create a reference to the location in the database where you want to store the data
  const userRef = ref(db, "Request Service Form/" + name);

  // Write data to this reference
  set(userRef, data)
    .then(() => {
      alert("Form submitted successfully!");
      console.log("Form submitted successfully");
    })
    .catch((error) => {
      console.error("Error submitting form: ", error);
      alert("Error submitting form: " + error.message);
    });

    event.target.reset();
};
