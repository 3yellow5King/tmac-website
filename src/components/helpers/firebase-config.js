import firebase from 'firebase';

// https://firebase.google.com/docs/web/setup?authuser=0

// See firebase setup in above google firebase documentation url
export const config = {
  apiKey: process.env.process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

export default firebase;
