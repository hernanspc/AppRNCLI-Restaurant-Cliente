import firebase from 'firebase';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQYP3DOrhWC89l34wpmF-p74IRcXOxgMs",
    authDomain: "restorant-327da.firebaseapp.com",
    databaseURL: "https://restorant-327da-default-rtdb.firebaseio.com",
    projectId: "restorant-327da",
    storageBucket: "restorant-327da.appspot.com",
    messagingSenderId: "939152086215",
    appId: "1:939152086215:web:34b877309e31934605dae2",
    measurementId: "G-DV564RXBS4"
  };
  //INITALIZE 
  firebase.initializeApp(firebaseConfig);

  const db =  firebase.firestore()

  export default {
    firebase,
    db
  }