import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAyOGYwzs16JIQ6AnOVD7xt_3yEuLMuLTo',
  authDomain: 'crown-db-1cd1d.firebaseapp.com',
  projectId: 'crown-db-1cd1d',
  storageBucket: 'crown-db-1cd1d.appspot.com',
  messagingSenderId: '583469062245',
  appId: '1:583469062245:web:a66414ea67a455a22f8e8c',
  measurementId: 'G-1WTMV28MFL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
