import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCHVIgpxvNcCAkyhWPdQtzvjlqPwYwB2Uc",
  authDomain: "serv-db.firebaseapp.com",
  projectId: "serv-db",
  storageBucket: "serv-db.appspot.com",
  messagingSenderId: "933383608470",
  appId: "1:933383608470:web:6bd09f58c84644f18a4ab7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestor = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;