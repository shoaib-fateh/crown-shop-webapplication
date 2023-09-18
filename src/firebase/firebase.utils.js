/** @format */

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyAF9pVvpCvBSxQo2LGWaD-9ih2rUHKvXNw',
	authDomain: 'crwn-db-8f8cc.firebaseapp.com',
	projectId: 'crwn-db-8f8cc',
	storageBucket: 'crwn-db-8f8cc.appspot.com',
	messagingSenderId: '389718118469',
	appId: '1:389718118469:web:55ef72682c93b70cd1932c',
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
