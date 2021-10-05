import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDkFTtZA7ZqBR9zUvdSgnQkPCgV5PWXjWs",
    authDomain: "classtest-dd814.firebaseapp.com",
    projectId: "classtest-dd814",
    storageBucket: "classtest-dd814.appspot.com",
    messagingSenderId: "598597258258",
    appId: "1:598597258258:web:0febb2f0af0c76f9821ccb"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();