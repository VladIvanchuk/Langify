import React from "react";
import styles from "./Courses.module.scss";
import courseImg from "../assets/learn.jpg";
import { Link } from "react-router-dom";
function CoursesHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.img}>
          <img src={courseImg} alt="" />
          <p>Обери собі курс</p>
        </div>
      </div>
      <p className={styles.breadCrumbs}>
        <Link to="/">Головна</Link> / Курси
      </p>
    </div>
  );
}

export default CoursesHeader;
