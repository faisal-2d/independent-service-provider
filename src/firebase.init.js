// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNSWTmw-YB8DMwBEvoieywEJ39yRgQD-c",
  authDomain: "assignment-10-b0095.firebaseapp.com",
  projectId: "assignment-10-b0095",
  storageBucket: "assignment-10-b0095.appspot.com",
  messagingSenderId: "441943849085",
  appId: "1:441943849085:web:90e220a3b9cb563ea01914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;