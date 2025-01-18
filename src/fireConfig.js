import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfIAeXVQ5O_3XMvp1dPV6X_gfxOYZCUQY",
  authDomain: "authuser-17ea0.firebaseapp.com",
  projectId: "authuser-17ea0",
  storageBucket: "authuser-17ea0.appspot.com",
  messagingSenderId: "327734940879",
  appId: "1:327734940879:web:10304c6c7bc1a3930553ba"
};
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); 
export const auth = getAuth(app) 
export default db;


