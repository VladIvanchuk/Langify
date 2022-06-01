import React from "react";
import styles from "./Login.module.scss";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      <GoogleButton className={styles.button} onClick={handleGoogleSignIn}>Увійти з Google</GoogleButton>
    </div>
  );
}
export default Login;
