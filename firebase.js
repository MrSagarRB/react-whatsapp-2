import firebase from 'firebase';



const firebaseConfig = {
  
  };


  const app=!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
 : firebase.app();

 const db=app.firestore();
 const auth=app.auth();
