import {firebase} from "firebase";
// import {getfirestore} from "@firebase/firestore";

const firebaseApp = firebase.initializedApp({
    apiKey: "AIzaSyCl34zRCILUZxaR0zUIm8YVmrpE5vX5Ao8",
    authDomain: "insta-clone-16478.firebaseapp.com",
    databaseURL: "https://insta-clone-16478-default-rtdb.firebaseio.com",
    projectId: "insta-clone-16478",
    storageBucket: "insta-clone-16478.appspot.com",
    messagingSenderId: "369023830323",
    appId: "1:369023830323:web:5ae26382ec8d72ee24d646"
  });

//   export default firebaseConfig;

// const app = initializedApp(firebaseConfig);
// const firestore = getfirestore(app);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage  = firebase.storage();

export {db, auth, storage};