// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from  "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAs9e7LHzW8rZmxiLUR0DelIFH6vebdLOY",
  authDomain: "uber-clone-next-95773.firebaseapp.com",
  projectId: "uber-clone-next-95773",
  storageBucket: "uber-clone-next-95773.appspot.com",
  messagingSenderId: "630495439528",
  appId: "1:630495439528:web:5802a8b194b6145a6bb09d",
  measurementId: "G-B05007H2NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export {auth,app,provider};