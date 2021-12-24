import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1N9wNL7kq1yVmoUiGG2zD-dQFt5R7Az0",
  authDomain: "tienda-nico-react.firebaseapp.com",
  projectId: "tienda-nico-react",
  storageBucket: "tienda-nico-react.appspot.com",
  messagingSenderId: "739331528458",
  appId: "1:739331528458:web:fefb7e29446306db068cf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
