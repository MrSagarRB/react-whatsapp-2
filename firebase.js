import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBFFmdl8o4hqNidWZSKkQaCmg0l4yww6Fw",
    authDomain: "whatsapp-2-56608.firebaseapp.com",
    projectId: "whatsapp-2-56608",
    storageBucket: "whatsapp-2-56608.appspot.com",
    messagingSenderId: "796730635699",
    appId: "1:796730635699:web:a320262133afe4fdda47c6",
    measurementId: "G-326178QZ7K"
  };


  const app=!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
 : firebase.app();

 const db=app.firestore();
 const auth=app.auth();