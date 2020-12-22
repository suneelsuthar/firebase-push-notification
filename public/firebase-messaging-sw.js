importScripts ("https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js")
importScripts ("https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js")
firebase.initializeApp({
    apiKey: "AIzaSyBNgpvSCGHIJI5jUngRuMC8jGrwEiVPAH8",
  authDomain: "iskillers-portal.firebaseapp.com",
  projectId: "iskillers-portal",
  storageBucket: "iskillers-portal.appspot.com",
  messagingSenderId: "499018242267",
  appId: "1:499018242267:web:df2335c71214ae6dcad4fe",
  measurementId: "G-542PYQE3F4"
})
const initMessaging = firebase.messaging()