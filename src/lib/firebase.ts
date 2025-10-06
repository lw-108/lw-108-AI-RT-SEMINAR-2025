import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfOFyRIIKxmCYtkB6hKGUWc-SjcNpiWSI",
  authDomain: "seminar-feedbacks.firebaseapp.com",
  projectId: "seminar-feedbacks",
  storageBucket: "seminar-feedbacks.appspot.com", // ✅ fixed
  messagingSenderId: "963174207335",
  appId: "1:963174207335:web:c59974143067c952ed29c2",
  measurementId: "G-EW9HL3K22Q",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
