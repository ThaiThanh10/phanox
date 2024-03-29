// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMQX3ncexJA8Ueds6vSE8B_aJjhhVPIDA",
    authDomain: "todolist-fbece.firebaseapp.com",
    databaseURL: "https://todolist-fbece-default-rtdb.firebaseio.com",
    projectId: "todolist-fbece",
    storageBucket: "todolist-fbece.appspot.com",
    messagingSenderId: "629262817566",
    appId: "1:629262817566:web:00e8d218a81f77fe72110f",
    measurementId: "G-DL51BPV8E7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getDatabase(app)
export { auth, provider, db }
// const analytics = getAnalytics(app)
