import '../styles/App.css';
import React, {useEffect, useReducer, useState} from 'react';

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

function App() {

    const [userId, setUserId] = useState(false);
    const [userDisplayName, setUserDisplayName] = useState(false);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            setUserId(user.email)
            setUserDisplayName(user.displayName)
        } else {
            setUserId('')
            setUserDisplayName('')
        }
    });

  const logout = () => {
      firebase.auth().signOut()
          // .then(setUserId(''))
  }

  const login = () => {
      firebase.auth().signInWithEmailAndPassword('davidmarubbi@gmail.com','letmein')
          .then((user) => {


              // const a = firebase.auth().currentUser;
              //
              // a.updateProfile({
              //     displayName: "Jane Q. User",
              //     photoURL: "https://example.com/jane-q-user/profile.jpg"
              // }).then(function() {
              //     console.log('profile updated')
              // }).catch(function(error) {
              //     console.log('error updating')
              // });

          })


  }

  const newUser = () => {
    firebase.auth().createUserWithEmailAndPassword('davidmarubbi@gmail.com','letmein')
        .then((user) => {
          console.log('User Signed in');
          console.log(user.user.email)
          setUserId(user.user.email)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          console.log(errorCode);
          console.log(errorMessage);
        });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          What information is available on login?
        </p>
        <form >

        </form>
        <button onClick={newUser}>
          Create New User
        </button>
        <button onClick={login}>
          Login
        </button>
        <button onClick={logout}>
          Logout
        </button>
        <p>
            Current User: {userId} - {userDisplayName}
        </p>
      </header>
    </div>
  );
}

export default App;
