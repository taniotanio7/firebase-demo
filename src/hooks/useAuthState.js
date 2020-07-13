import { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

function useAuthState() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => setLoggedIn(!!user));
  }, []);

  return loggedIn;
}

export default useAuthState;
