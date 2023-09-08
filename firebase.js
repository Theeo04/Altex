import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC10swIXzTp-W3VCcijkKFKw63RkNO5xkg",
  authDomain: "altex-8ccba.firebaseapp.com",
  projectId: "altex-8ccba",
  storageBucket: "altex-8ccba.appspot.com",
  messagingSenderId: "661697790026",
  appId: "1:661697790026:web:e6a7caa38d229b497ca6b3",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, db, storage };
