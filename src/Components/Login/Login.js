import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/auth";
import { userContext } from "../../App";

const Login = () => {
  const [loginUser, setLoginUser] = useContext(userContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDoiUZq9T0myl7BNHqo_xjdiuzNhZt-vqY",
      authDomain: "volunteer-network-e9524.firebaseapp.com",
      databaseURL: "https://volunteer-network-e9524.firebaseio.com",
      projectId: "volunteer-network-e9524",
      storageBucket: "volunteer-network-e9524.appspot.com",
      messagingSenderId: "525171806512",
      appId: "1:525171806512:web:30938d6af4f4a73e2eb8f5"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        var user = result.user;
        console.log(user.displayName, user.email);
        setLoginUser({ name: user.displayName, email: user.email });
        history.replace(from);
      })
      .catch(function (error) {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div
      style={{ minHeight: "50vh" }}
      className="w-75 d-flex flex-column justify-content-center align-items-center border mt-5 mx-auto px-5"
    >
      <h1 className="text-center w-100">Login with</h1>
      <p
        onClick={handleGoogleLogin}
        style={{ borderRadius: "50px", cursor: "pointer" }}
        className="w-100 text-center my-5 border py-3"
      >
        Continue with Google
      </p>
      <p>Don't have an account? Create an account.</p>
    </div>
  );
};

export default Login;
