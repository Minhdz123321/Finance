import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
app
import { app } from "../../firebaseConfig";
export default function login() {
  const auth = getAuth(app);

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful sign-in
      const user = result.user;
      console.log("Signed in as:", user.displayName);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error signing in:", error.message);
    });
};

  return (
    <div>
    <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}
