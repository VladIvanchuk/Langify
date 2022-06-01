import React from "react";
import newsImg from "../assets/news.jpg";
import { Link } from "react-router-dom";
import styles from "./NewsHeader.module.scss";

export const NewsHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.img}>
          <img src={newsImg} alt="" />
          <p>Новини школи</p>
        </div>
      </div>
      <p className={styles.breadCrumbs}>
        <Link to="/">Головна</Link> / Новини
      </p>
    </div>
  );
};
export default NewsHeader;
