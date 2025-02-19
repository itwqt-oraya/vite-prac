import React from "react";
import { auth, provider } from "../../utils/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signIn = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    })
    .catch((e) => {
      const errCode = e.code;
      const errMsg = e.message;
      const email = e.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(e);
    });
};

export default function index() {
  return (
    <div>
      <h1>Google Auth</h1>
      <button onClick={signIn}>Login</button>
    </div>
  );
}
