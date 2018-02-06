import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAESv6Iwz9cg9xszAJYaBQtHkOtB98iamQ",
  authDomain: "chat-app-66feb.firebaseapp.com",
  databaseURL: "https://chat-app-66feb.firebaseio.com",
  storageBucket: "chat-app-66feb.appspot.com",
  messagingSenderId: "1031155221303"
};
var base = firebase.initializeApp(config);
export default base;
