import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAhR7EHqohJRJoQyHpTZimOOYbvSSc62F4",
    authDomain: "react-64b05.firebaseapp.com",
    projectId: "react-64b05",
    storageBucket: "react-64b05.appspot.com",
    messagingSenderId: "907916104078",
    appId: "1:907916104078:web:f3d72c6dfec13a925394df",
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;


