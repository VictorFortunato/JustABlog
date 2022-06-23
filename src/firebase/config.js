
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-lrw1u58vPGCQwcZvgmhFaBpZzn43VEA",
  authDomain: "caretag-fab44.firebaseapp.com",
  projectId: "caretag-fab44",
  storageBucket: "caretag-fab44.appspot.com",
  messagingSenderId: "781311915136",
  appId: "1:781311915136:web:d8ba4d5937a9f3c200e265"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};