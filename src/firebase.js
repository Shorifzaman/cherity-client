import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCLqSYkTtAGF9j-SakZSaUBGWQVjXIldSA",
    authDomain: "cherity-ukbd.firebaseapp.com",
    projectId: "cherity-ukbd",
    storageBucket: "cherity-ukbd.appspot.com",
    messagingSenderId: "350295585987",
    appId: "1:350295585987:web:e166b721040a377e78de76"

    // apiKey: "AIzaSyDXmD5txwepDzyl2Ei_b_1prCThtK9fgc8",
    // authDomain: "the-car-doctor.firebaseapp.com",
    // projectId: "the-car-doctor",
    // storageBucket: "the-car-doctor.appspot.com",
    // messagingSenderId: "927123119610",
    // appId: "1:927123119610:web:404445792d2e1c54549843"
});

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;