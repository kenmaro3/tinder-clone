import firebase from "firebase";

const firebaseConfig = {

  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database

