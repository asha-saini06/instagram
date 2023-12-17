import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANcWvFtGe47vj7OjGcVcO_7duLmnoWSmQ",
  authDomain: "insta-clone-5ef02.firebaseapp.com",
  projectId: "insta-clone-5ef02",
  storageBucket: "insta-clone-5ef02.appspot.com",
  messagingSenderId: "206172831008",
  appId: "1:206172831008:web:dba2d35dc533a2ab302b45",
  measurementId: "G-BZKYTDKWVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
