// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseconfig = {
//   apiKey: "AIzaSyBmLyKq_iniKcedDdDNeMxdRDp_ewUOV6w",
//   authDomain: "ecstatic-emblem-268211.firebaseapp.com",
//   projectId: "ecstatic-emblem-268211",
//   storageBucket: "ecstatic-emblem-268211.appspot.com",
//   messagingSenderId: "837040977434",
//   appId: "1:837040977434:web:cccfbff83ec1809f9683a3",
// };



const firebaseConfig = {
  apiKey: "AIzaSyCT0ImpDOWiaR0iF1n_N0RQ6ZqtHeNui5c",
  authDomain: "fir-for-react-apps.firebaseapp.com",
  databaseURL: "https://fir-for-react-apps-default-rtdb.firebaseio.com",
  projectId: "fir-for-react-apps",
  storageBucket: "fir-for-react-apps.appspot.com",
  messagingSenderId: "1078427290837",
  appId: "1:1078427290837:web:61d8b6ee5ade25517f265c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
