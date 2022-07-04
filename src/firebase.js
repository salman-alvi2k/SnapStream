import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCl34zRCILUZxaR0zUIm8YVmrpE5vX5Ao8",
    authDomain: "insta-clone-16478.firebaseapp.com",
    databaseURL: "https://insta-clone-16478-default-rtdb.firebaseio.com",
    projectId: "insta-clone-16478",
    storageBucket: "insta-clone-16478.appspot.com",
    messagingSenderId: "369023830323",
    appId: "1:369023830323:web:5ae26382ec8d72ee24d646"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);

// onAuthStateChange(auth, user => {
//     if (user != null) {
//         console.log('logged in');
//     } else {
//         console.log('No user');
//     }
// });

export { db, auth, storage };