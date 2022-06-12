import app from 'firebase/app'
// import app from "firebase/compat/app";

import 'firebase/firestore'
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
import firebaseConfig from './config';

class Firebase{
    constructor(){
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.db = app.firestore();
    }
}

const firebase = new Firebase();
export default firebase;