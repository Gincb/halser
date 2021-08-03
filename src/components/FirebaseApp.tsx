import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';

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
      const profileImage = 'https://images.unsplash.com/photo-1514813482567-2858e6c00ee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

      try {
        userRef.set({ username, email, createdAt: new Date(), profileImage});
      } catch (error) {
        console.log(error.message);
      }
    }
  } else return;
}

export async function getUserDoc(user: any) {
  if (user) {
    const userRef = firestore.collection('users');
    const snapshot = await userRef.get();

    if (snapshot) {
      const currentUser = user.uid;
      const findData = snapshot?.docs.find(el => el.id === currentUser);
      return findData?.data();
    } else {
      console.log('User doesnt exist');
    }
  }
}

export async function uploadUserImage(user: any, profileImage: string) {
  if (user) {
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (snapshot) {
      getUserDoc(user).then(info => {
        try {
          userRef.set({
            username: info?.username,
            email: info?.email,
            createdAt: info?.createdAt,
            socials: {twitter: info?.socials.twitter ? info.socials.twitter : 'twitter.com/', instagram: info?.socials.instagram ? info.socials.instagram : 'instagram.com/', linkedin: info?.socials.linkedin ? info.socials.linkedin : 'linkedin.com/', website: info?.socials.website ? info.socials.website : '/'},
            description: info?.description ? info.description : '',
            profileImage,
          });
        } catch (error) {
          console.log(error.message);
        }
      });
    } else {
      console.log('User doesnt exist');
    }
  }
}

export async function updateUser(user: any, additionalData: any) {
  if (user) {
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (snapshot) {
      const { email } = user;
      const {username, description, socials: {twitter, instagram, linkedin, website} } = additionalData;

      getUserDoc(user).then(info => {
        try {
          if (info?.profileImage === undefined) {
            userRef.set({
              username,
              email,
              createdAt: info?.createdAt,
              description,
              socials: {
                twitter, instagram, linkedin, website
              }
            });
          } else {
            userRef.set({
              username,
              email,
              createdAt: info?.createdAt,
              description,
              socials: {
                twitter, instagram, linkedin, website
              },
              profileImage: info?.profileImage,
            });
          }
        } catch (error) {
          console.log(error.message);
        }
      });
    }
  } else return;
}

export default firebaseApp
