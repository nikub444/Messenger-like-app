import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAHjC3Khmlp_pPmLO_Ntq1kNn4LnPa0NZw',
  authDomain: 'messenger-like-chat-app.firebaseapp.com',
  databaseURL: 'https://messenger-like-chat-app.firebaseio.com',
  projectId: 'messenger-like-chat-app',
  storageBucket: 'messenger-like-chat-app.appspot.com',
  messagingSenderId: '435174440100',
  appId: '1:435174440100:web:fb4b2d05e80ed527aafa31',
  measurementId: 'G-1Z6HZJJL2Z',
});

const db = firebase.firestore();

export default db;
