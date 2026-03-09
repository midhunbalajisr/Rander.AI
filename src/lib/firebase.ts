import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIJMkezIZvYSMmPmEMs8SK09Yyjal647A",
  authDomain: "rander-ai.firebaseapp.com",
  projectId: "rander-ai",
  storageBucket: "rander-ai.firebasestorage.app",
  messagingSenderId: "498972321797",
  appId: "1:498972321797:web:e2be1e2fa77235d520946c",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
