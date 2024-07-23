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
export const handleFormSubmit = (event : any) => {
  console.log("Form submitted");
  // Add your form handling logic here
  event.preventDefault();

  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const project_details = document.getElementById("project_details").value;

  const data = {
    first_name,
    last_name,
    email,
    project_details,
  };
  console.log(data);

  // Create a reference to the location in the database where you want to store the data
  const userRef = ref(db, "Contact us Form/" + first_name + " " + last_name);

  // Write data to this reference
  set(userRef, data)
    .then(() => {
    //   alert("Form submitted successfully!");
      console.log("Form submitted successfully");
    })
    .catch((error) => {
      console.error("Error submitting form: ", error);
      alert("Error submitting form: " + error.message);
    });

    event.target.reset();
};
