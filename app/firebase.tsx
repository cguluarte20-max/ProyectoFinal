import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtMqHeM5ks3A0BWa22OV7J7IM9-ZrMVnw",
  authDomain: "proyectofinal-d6e54.firebaseapp.com",
  projectId: "proyectofinal-d6e54",
  storageBucket: "proyectofinal-d6e54.firebasestorage.app",
  messagingSenderId: "516945983628",
  appId: "1:516945983628:web:1c2b02513a922202a523a9"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);