import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

firebase.initializeApp({
    apiKey: 'AIzaSyCOFz0YJRGui0sPt3cgv5FndaezNlQC_No',
    authDomain: 'citi-app.firebaseapp.com',
    databaseURL: 'https://citi-app.firebaseio.com',
    projectId: 'citi-app',
    storageBucket: 'citi-app.appspot.com',
    messagingSenderId: '423585137097',
    appId: '1:423585137097:web:2f5fb3f9b3b31a029c6818',
    measurementId: 'G-TQY3Y9EXTH',
});

const db = firebase.firestore();
export default db;
