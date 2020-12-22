import firebase from "firebase/app";
import "firebase/database";
import 'firebase/storage';
import "firebase/firebase-auth";
import "firebase/messaging";


var firebaseConfig = {
  apiKey: "AIzaSyBNgpvSCGHIJI5jUngRuMC8jGrwEiVPAH8",
  authDomain: "iskillers-portal.firebaseapp.com",
  projectId: "iskillers-portal",
  storageBucket: "iskillers-portal.appspot.com",
  messagingSenderId: "499018242267",
  appId: "1:499018242267:web:df2335c71214ae6dcad4fe",
  measurementId: "G-542PYQE3F4"
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);