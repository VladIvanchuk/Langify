import React from "react";
import styles from "./UserForm.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import { UserAuth } from "../../Context/Context";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

function UserForm({ active, setActive }) {
  const { user } = UserAuth();

  const [namevalue, setnameValue] = useState("");
  const [phonevalue, setPhoneValue] = useState("");
  const [emailvalue, setEmailValue] = useState("");
  const [selectvalue, setSelectValue] = useState("");

  const send = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        uid: user.uid,
        name: namevalue,
        phone: phonevalue,
        email: emailvalue,
        select: selectvalue,
      });

      setnameValue("");
      setPhoneValue("");
      setEmailValue("");
      setSelectValue("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
      className={active ? `${styles.active} ${styles.modal} ` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          Записатися на курс
          <span onClick={() => setActive(false)}>X</span>
        </div>
        <div className={styles.body}>
          <form action="">
            <label htmlFor="name">Введіть ПІБ </label>
            <input
              onChange={(e) => setnameValue(e.target.value)}
              value={namevalue}
              placeholder="ПІБ"
              id="name"
              type="name"
            />

            <label htmlFor="phone">Введіть ваш телефон </label>
            <input
              onChange={(e) => setPhoneValue(e.target.value)}
              value={phonevalue}
              placeholder="phone"
              id="phone"
              type="phone"
            />

            <label htmlFor="email">Введіть email </label>
            <input
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailvalue}
              placeholder="Email"
              id="email"
              type="email"
            />

            <label htmlFor="course">Оберіть Бажаний курс </label>
            <select
              value={selectvalue}
              onChange={(e) => setSelectValue(e.target.value)}
              id="course"
              name="course"
            >
              <option value="" disabled selected>
                Курс
              </option>
              <option>Aнглійська мова</option>
              <option>Польська мова</option>
              <option>Німецька мова</option>
              <option>Французька мова</option>
            </select>
          </form>
          <div className={styles.button}>
            <button
              onClick={() => {
                send();
                setActive(false);
              }}
            >
              Записатися
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
UserForm.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
export default UserForm;
