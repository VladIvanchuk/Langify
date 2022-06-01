import React from "react";
import logoSvg from "../../assets/logo.svg";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logoSvg} alt="" />
        <Link to="/courses">Записатися на курс</Link>
      </div>
      <div className={styles.block}>
        <div className={styles.menu}></div>
        <div className={styles.contacts}>
          <p>Телефон </p> <p>+38096843769</p>
          <p>Еmail </p> <p> example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
