import React, { useState } from "react";
import CoursesHeader from "./CoursesHeader";
import styles from "./Courses.module.scss";
import UserForm from "../components/UserForm/UserForm";

function Courses() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <CoursesHeader />
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Aнглійська мова</h3>
            <span>50$</span>
            <p className={styles.breadCrumbs}>10 занятть</p>
            <button onClick={() => setModalActive(true)}>Записатися на курс</button>
          </div>
          <div className={styles.card}>
            <h3>Польська мова</h3>
            <span>60$</span>
            <p className={styles.breadCrumbs}>15 занятть</p>
            <button onClick={() => setModalActive(true)}>Записатися на курс</button>
          </div>
          <div className={styles.card}>
            <h3>Німецька мова</h3>
            <span>45$</span>
            <p className={styles.breadCrumbs}>9 занятть</p>
            <button onClick={() => setModalActive(true)}>Записатися на курс</button>
          </div>
          <div className={styles.card}>
            <h3>Французька мова</h3>
            <span>70$</span>
            <p className={styles.breadCrumbs}>15 занятть</p>
            <button onClick={() => setModalActive(true)}>Записатися на курс</button>
          </div>
        </div>
      </div>
      <UserForm active={modalActive} setActive={setModalActive} />
    </>
  );
}

export default Courses;
