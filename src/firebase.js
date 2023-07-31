import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeguwCwnAgQzKRR3wAXvTspKw9LnqSfwM",
  authDomain: "martin-movie-app.firebaseapp.com",
  databaseURL:
    "https://martin-movie-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "martin-movie-app",
  storageBucket: "martin-movie-app.appspot.com",
  messagingSenderId: "758628953451",
  appId: "1:758628953451:web:5a5ec4faa62fe6ec11f02e",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
