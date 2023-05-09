// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeG7lYckeRpLgziq5cVujV3WB78k2E0_U",
  authDomain: "fastifico.firebaseapp.com",
  projectId: "fastifico",
  storageBucket: "fastifico.appspot.com",
  messagingSenderId: "163751168004",
  appId: "1:163751168004:web:c270b0a75e1bbd7db84d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;