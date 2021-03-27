import firebase from 'firebase'
require('@firebase/firestore')
  var firebaseConfig = {
    apiKey: "AIzaSyBzSBPmv-L_fGupJqZzqhQXDcf6vhmy0jw",
    authDomain: "barter-system-1958f.firebaseapp.com",
    projectId: "barter-system-1958f",
    storageBucket: "barter-system-1958f.appspot.com",
    messagingSenderId: "203406121827",
    appId: "1:203406121827:web:1e8ff2d9c965392d38d156"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()