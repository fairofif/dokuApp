import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvBWXi3HIqLwq-PbTkgUIJhX8ApaXfr0Y",
    authDomain: "dokuapp-baa66.firebaseapp.com",
    databaseURL: "https://dokuapp-baa66-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dokuapp-baa66",
    storageBucket: "dokuapp-baa66.appspot.com",
    messagingSenderId: "606706199970",
    appId: "1:606706199970:web:2b11e7203cee818b1416fb"
}


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
