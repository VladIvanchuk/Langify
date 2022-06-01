import React from "react";
import styles from "./Teachers.module.scss";
import teachersImg from "../assets/teachers.jpg";
import { Link } from "react-router-dom";
function TeachersHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.img}>
          <img src={teachersImg} alt="" />
          <p>На нашому курсі вам викладатимуть найкращі викладачі</p>
        </div>
      </div>
      <p className={styles.breadCrumbs}>
        <Link to="/">Головна</Link> / Bикладачі
      </p>
    </div>
  );
}

export default TeachersHeader;
