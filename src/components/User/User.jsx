import React from "react";
import styles from "../Header/Header.module.scss";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/Context";

function user() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <img src={user.photoURL} alt="" />
      <Link to="/" className={styles.nickname}>
        {user.displayName}
      </Link>
      <a onClick={handleSignOut}>Sign out</a>
    </div>
  );
}

export default user;
