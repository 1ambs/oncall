import React, {useState} from "react";
import firebase from "firebase/app";
import styles from "../styles/NewUser.css";

const NewUser = () => {

  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newDisplayName, setNewDisplayName] = useState('');
  const [newImageURL, setNewImageURL] = useState('');

  const addNewUser = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(newUserEmail,newUserPassword)
        .then((user) => {
          console.log('User Signed in');
          console.log(user.user.email)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode);
          console.log(errorMessage);
        });
  }

return (
  <form onSubmit={addNewUser}>
    <h4>New User Form</h4>
    <input type="email" value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)}/>
    <input type="password" value={newUserPassword} onChange={(e) => setNewUserPassword(e.target.value)}/>
    <h4>Display Name</h4>
    <textarea value={newDisplayName} onChange={(e) => setNewDisplayName(e.target.value)}/>
    <h4>Image URL</h4>
    <input value={newImageURL} onChange={(e) => setNewImageURL(e.target.value)}/>
    <h4>Image</h4>
    {/*<img src={ imageURL } id="image" width="200" alt=''/>*/}
    {/*<input*/}
    {/*    type="file"*/}
    {/*    accept="image/*"*/}
    {/*    name="image"*/}
    {/*    id="image"*/}
    {/*    onChange={onImageChange}*/}
    {/*/>*/}
    <div className={styles.buttonContainer}>
      <button className={styles.Button}>Submit</button>
      {/*{ id !== '' && <button className={styles.Button} onClick={resetForm}>Cancel</button> }*/}
    </div>
  </form>
)
}

export {NewUser as default};