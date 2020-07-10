import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8Ed3c-gtNgqOKMJfEJ3YfgYwzm-7lPQY",
  authDomain: "buddy-demo-todo.firebaseapp.com",
  databaseURL: "https://buddy-demo-todo.firebaseio.com",
  projectId: "buddy-demo-todo",
  storageBucket: "buddy-demo-todo.appspot.com",
  messagingSenderId: "175580667377",
  appId: "1:175580667377:web:a27920a275fbb0a0f57850",
  measurementId: "G-V6G5YNGEPF",
};

firebase.initializeApp(firebaseConfig);

export const uiConfig = {
  signInSuccessUrl: "/",
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "/terms-of-service",
};
