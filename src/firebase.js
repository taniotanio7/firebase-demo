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

const testFirebaseConfig = {
  apiKey: "AIzaSyBG9qTppLObed94KUFHEZ9nH-38hv4Jtuc",
  authDomain: "buddy-demo-todo-testing.firebaseapp.com",
  databaseURL: "https://buddy-demo-todo-testing.firebaseio.com",
  projectId: "buddy-demo-todo-testing",
  storageBucket: "buddy-demo-todo-testing.appspot.com",
  messagingSenderId: "634356635376",
  appId: "1:634356635376:web:0cfe23444a54385a9a5435",
  measurementId: "G-G8DCPFKPQY",
};

if (process.env.TESTING) {
  firebase.initializeApp(testFirebaseConfig);
} else {
  firebase.initializeApp(firebaseConfig);
}

export const uiConfig = {
  signInSuccessUrl: "/",
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "/terms-of-service",
};
