import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDPqiaTbHAc_olZ_OJR2uYN04hHLU2OwY8",
    authDomain: "coffee-shop-1569c.firebaseapp.com",
    projectId: "coffee-shop-1569c",
    storageBucket: "coffee-shop-1569c.appspot.com",
    messagingSenderId: "696054945707",
    appId: "1:696054945707:web:778089987079df73f0e4ee"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
