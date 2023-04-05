import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDBvfAbia7NGAjzZyL4OFuQe8EPY__Rvus",
  authDomain: "ecommerce-web-react.firebaseapp.com",
  projectId: "ecommerce-web-react",
  storageBucket: "ecommerce-web-react.appspot.com",
  messagingSenderId: "35403009572",
  appId: "1:35403009572:web:c5c27483b632f73fc352b1",
  measurementId: "G-D6BD7XR5Q1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}