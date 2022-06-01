import React, { useState } from "react";
import styles from "./Teachers.module.scss";
import profileImg from "../assets/profile.jpg";
import Carusel from "../components/Carusel/TeachersCarousel";

export const CoursesInfo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const [value, setValue] = useState("");
  const searched = users.filter((user) => {
    return user.name.toLowerCase().includes(value.toLowerCase());
  });

  const [city, setCity] = useState("");
  const filtred = searched.filter((user) => {
    return user.address.city.includes(city);
  });

  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Carusel />
      <form className={styles.search}>
        <h3>Знайти : </h3>
        <input
          className={styles.search_input}
          placeholder="Name"
          type="search"
          name="search"
          onChange={(e) => setValue(e.target.value)}
        />
        <h3>Країна : </h3>
        <select id="countries" name="countries" onChange={(e) => setCity(e.target.value)}>
          {users.map((user) => (
            <option key={user.id} value={user.address.city}>
              {user.address.city}
            </option>
          ))}
        </select>
      </form>
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          {filtred.map((user) => (
            <div key={user.id} className={styles.card}>
              <img src={profileImg} alt="" />
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          ))}
          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  );
};

export default CoursesInfo;
