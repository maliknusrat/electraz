
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlcJsPrfprItdqcr6oU5nbAbE6kGiIfwU",
  authDomain: "electraz.firebaseapp.com",
  projectId: "electraz",
  storageBucket: "electraz.appspot.com",
  messagingSenderId: "373311173771",
  appId: "1:373311173771:web:21437b1d81577f26c6508e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;