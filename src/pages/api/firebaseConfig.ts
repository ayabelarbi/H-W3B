// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3NOXtCDvLgl3krsuWW87xT_QGQi3yBO4",
  authDomain: "h-w3b-88aeb.firebaseapp.com",
  projectId: "h-w3b-88aeb",
  storageBucket: "h-w3b-88aeb.appspot.com",
  messagingSenderId: "336047200888",
  appId: "1:336047200888:web:09deac2733d294e3942b8d",
  measurementId: "G-8DQM1GMQNW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;