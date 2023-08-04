
import { initializeApp } from "firebase/app";
import  { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC2rnRSaPBveZv7DdYW4xXv9Dm4rUYtqIk",
  authDomain: "reactlinks-dccee.firebaseapp.com",
  projectId: "reactlinks-dccee",
  storageBucket: "reactlinks-dccee.appspot.com",
  messagingSenderId: "603120731279",
  appId: "1:603120731279:web:e2e1fdce8c849c79051cfa"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};