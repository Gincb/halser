import * as firebase from "firebase/app"
import "firebase/auth"

const firebaseApp = firebase.default.initializeApp({
  apiKey: "AIzaSyCg1CNijXxnN8XyNwEV9xjlWJr6mQE0Uqw",
  databaseURL:
    "https://halser-216d6-default-rtdb.europe-west1.firebasedatabase.app/",
  authDomain: "halser-216d6.firebaseapp.com",
  projectId: "halser-216d6",
  storageBucket: "halser-216d6.appspot.com",
  messagingSenderId: "433810337991",
  appId: "1:433810337991:web:cbfc6203927cc553b90ee2",
})

export default firebaseApp
