import * as firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'

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

export const auth = firebase.default.auth();
export const firestore = firebase.default.firestore();

export async function createUserDocument(user: any
  , additionalData: any) {
  if (user) {
    const userRef = firestore.doc(`users/${user.uid}`);

    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email } = user;
      const { username } = additionalData;

      try {
        userRef.set({ username, email, createdAt: new Date() });
      } catch (error) {
        console.log(error.message);
      }
    }
  } else return;
}

export default firebaseApp
