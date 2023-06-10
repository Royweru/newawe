
import { initializeApp } from "firebase/app";
impor from "firebase-firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAXT3Mkgl7podaeHqA4ODy8GmZAUoLbgFU",
    authDomain: "simple-app-32981.firebaseapp.com",
    projectId: "simple-app-32981",
    storageBucket: "simple-app-32981.appspot.com",
    messagingSenderId: "520500032912",
    appId: "1:520500032912:web:ce05d652f2043d1341ef15"
};





export default async function connectFireBase() {
    initializeApp(firebaseConfig)
    
  return (
    <div>connectFireBase</div>
  )
}
