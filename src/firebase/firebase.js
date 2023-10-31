import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCiWhA5mXw_uR8IG2GXPdLEHdN1GKhUWPc",
  authDomain: "aj-films.firebaseapp.com",
  projectId: "aj-films",
  storageBucket: "aj-films.appspot.com",
  messagingSenderId: "1056183465456",
  appId: "1:1056183465456:web:479a416916a861b3761935"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;