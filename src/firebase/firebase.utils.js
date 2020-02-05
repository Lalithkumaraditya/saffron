import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDF9iePeZn-2SpFAo4lkrJbPILAVXJNf6Y",
    authDomain: "saffron-db.firebaseapp.com",
    databaseURL: "https://saffron-db.firebaseio.com",
    projectId: "saffron-db",
    storageBucket: "saffron-db.appspot.com",
    messagingSenderId: "514831307224",
    appId: "1:514831307224:web:99e7548c0c25ca01c1e2ad",
    measurementId: "G-7CH0N72KDM"
  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export  const firestore=firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle= () => auth.signInWithPopup(provider);
  export default firebase;