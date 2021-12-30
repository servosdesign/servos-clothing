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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return;
    } else {

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt, 
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

 return userRef;
}
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;