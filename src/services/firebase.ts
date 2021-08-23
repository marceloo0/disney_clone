import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC3-MGgKxTagpI1pqgRlbZ5x4hxfHHjP8o",
    authDomain: "disneyclonplus.firebaseapp.com",
    databaseURL: "https://disneyclonplus-default-rtdb.firebaseio.com",
    projectId: "disneyclonplus",
    storageBucket: "disneyclonplus.appspot.com",
    messagingSenderId: "623225645179",
    appId: "1:623225645179:web:624ed9e2a6dbda0d9d5ade"
  })
};

const auth = firebase.auth();
const database = firebase.database();
const db = firebase.firestore();

export { auth, firebase, database, db };
