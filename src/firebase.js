import firebase from "firebase/app"
import "firebase/firestore"

firebase.initializeApp({
    apiKey: "AIzaSyDMqJPKbhKvR4Ssme4VfWC1dwTxTxk7btI",
    authDomain: "rapiweb-105b6.firebaseapp.com",
    projectId: "rapiweb-105b6",
    storageBucket: "rapiweb-105b6.appspot.com",
    messagingSenderId: "361320634298",
    appId: "1:361320634298:web:25ffed38347209ad2fef83"
})

export const firestore = firebase.firestore()
export default firebase