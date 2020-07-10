import React, { useEffect, useState } from "react";
import LoginIcon from "~/assets/icons/login.svg";
import * as firebase from "firebase/app";
import "firebase/auth";

const LoginButton = ({ onOpen = () => {} }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => setLoggedIn(!!user));
  }, []);

  return (
    <a
      className="flex bg-blue-300 text-blue-900 pr-2 pl-4 py-2 rounded mt-2 mr-3 self-end cursor-pointer font-semibold"
      onClick={handleAuthChange}
    >
      {loggedIn ? "Sign Out" : "Log In"}
      <LoginIcon className="ml-2 icon" />
    </a>
  );

  function handleAuthChange() {
    if (!loggedIn) {
      // log in
      onOpen();
    } else {
      // sign out
      firebase.auth().signOut();
    }
  }
};

export default LoginButton;
