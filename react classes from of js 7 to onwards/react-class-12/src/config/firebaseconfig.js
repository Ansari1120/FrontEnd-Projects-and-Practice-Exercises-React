// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjjPHDOzb9YtdjqSM2G9Y9GzeBvICmrvU",
  authDomain: "fbauth-5d1fb.firebaseapp.com",
  databaseURL: "https://fbauth-5d1fb-default-rtdb.firebaseio.com",
  projectId: "fbauth-5d1fb",
  storageBucket: "fbauth-5d1fb.appspot.com",
  messagingSenderId: "890215104179",
  appId: "1:890215104179:web:ad83498f495e4cb1e77ac6",
  measurementId: "G-Q63F00PQ57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
