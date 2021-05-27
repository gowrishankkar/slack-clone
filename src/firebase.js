import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNNmxRodohfSAaknk1pA3dqidoFy1VVqI",
  authDomain: "slack-clone-27210.firebaseapp.com",
  projectId: "slack-clone-27210",
  storageBucket: "slack-clone-27210.appspot.com",
  messagingSenderId: "836884232310",
  appId: "1:836884232310:web:825be42fe8f084552f8757",
  measurementId: "G-YKYWF5FBPS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db}
