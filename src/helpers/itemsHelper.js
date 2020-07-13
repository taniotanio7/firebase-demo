import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

async function checkForUserDocExistence(userId) {
  const ref = firebase.firestore().collection("todos").doc(userId);
  const snapshot = await ref.get();
  if (!snapshot.exists) {
    await ref.set({});
  }
}

export async function addItem(item) {
  const user = firebase.auth().currentUser;
  if (user) {
    const ref = firebase.firestore().collection("todos").doc(user.uid);
    await checkForUserDocExistence(user.uid);
    const itemRef = ref.collection("items").doc(item.id);
    await itemRef.set({
      done: item.done,
      text: item.text,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  // silently fail if user not logged in
}

export async function updateItem(item) {
  const user = firebase.auth().currentUser;
  if (user) {
    const ref = firebase
      .firestore()
      .collection("todos")
      .doc(user.uid)
      .collection("items")
      .doc(item.id);
    await ref.update({
      done: item.done,
      text: item.text,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
}

export async function removeItem(item) {
  const user = firebase.auth().currentUser;
  if (user) {
    const ref = firebase
      .firestore()
      .collection("todos")
      .doc(user.uid)
      .collection("items")
      .doc(item.id);
    await ref.delete();
  }
}

export async function syncWithRemote() {
  const user = firebase.auth().currentUser;
  if (user) {
    const ref = firebase
      .firestore()
      .collection("todos")
      .doc(user.uid)
      .collection("items");

    const items = [];
    const snapshot = await ref.get();
    snapshot.forEach(doc => {
      const data = doc.data();
      items.push({
        id: doc.id,
        text: data.text,
        done: data.done,
        date: data.date.toDate(),
      });
    });
    const done = [];
    const notDone = [];
    items.forEach(item => {
      item.done ? done.push(item) : notDone.push(item);
    });
    return [
      ...notDone.sort((a, b) => b.date - a.date),
      ...done.sort((a, b) => a.date - b.date),
    ];
  }
}
