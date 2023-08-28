import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC10swIXzTp-W3VCcijkKFKw63RkNO5xkg",
  authDomain: "altex-8ccba.firebaseapp.com",
  projectId: "altex-8ccba",
  storageBucket: "altex-8ccba.appspot.com",
  messagingSenderId: "661697790026",
  appId: "1:661697790026:web:e6a7caa38d229b497ca6b3",
};

const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();
