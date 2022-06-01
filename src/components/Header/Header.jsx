import React from "react";
import logoSvg from "../../assets/logo.svg";
import { menu } from "./menu";
import User from "../User/User";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/Context";

export const Header = () => {
  const { user } = UserAuth();

  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <img src={logoSvg} alt="" />
        </div>
        <div className={styles.wrapper}>
          {menu.map((item, idx) => (
            <div key={`menu item ${idx}`} className={styles.nav}>
              <Link to={item.link}>{item.title}</Link>
              {Object.prototype.hasOwnProperty.call(item, "dropdown") && (
                <div className={styles.dropdownContetnt}>
                  <Link to={item.dropdown.link}>{item.dropdown.title}</Link>
                  <Link to={item.dropdown.link2}>{item.dropdown.title2}</Link>
                  <Link to={item.dropdown.link3}>{item.dropdown.title3}</Link>
                  <Link to={item.dropdown.link4}>{item.dropdown.title4}</Link>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.profile}>
          {!user ? <Link to={"/Login"}>Sign in</Link> : <User />}
        </div>
      </div>
    </div>
  );
};
export default Header;
