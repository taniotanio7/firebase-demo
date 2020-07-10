import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { uiConfig } from "~/firebase";
import CloseIcon from "~/assets/icons/close.svg";
import * as firebase from "firebase/app";

const LoginScreen = ({ onClose = () => {} }) => {
  return (
    <main className="w-full h-full flex justify-center">
      <div className="flex flex-col items-center container">
        <button className="bg-red-200 text-red-800 rounded-full p-1 shadow-md mt-3 self-end">
          <CloseIcon className="icon" onClick={onClose} />
        </button>
        <h2 className="text-center text-4xl font-bold mt-6">Log In</h2>
        <div className="mt-6">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    </main>
  );
};

export default LoginScreen;
