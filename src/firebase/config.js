import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC4H4mCpLtU8vb6vzVMkgLrF1zxrbmw4yM",
  authDomain: "sabra-oy.firebaseapp.com",
  projectId: "sabra-oy",
  storageBucket: "sabra-oy.appspot.com",
  messagingSenderId: "576812700930",
  appId: "1:576812700930:web:694361bad8761ac7a59e1b"
};

// init firebase
firebase.initializeApp( firebaseConfig )

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }