// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvhSJ6W0LwWF0D1vAUSkqbbjdcYvfMvNc",
    authDomain: "oncall-1ambs.firebaseapp.com",
    databaseURL: "https://oncall-1ambs.firebaseio.com",
    projectId: "oncall-1ambs",
    storageBucket: "oncall-1ambs.appspot.com",
    messagingSenderId: "4078598654",
    appId: "1:4078598654:web:54973ad69ba049964ae8af",
    measurementId: "G-D8HEQHDG5Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);