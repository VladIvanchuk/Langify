import React from "react";
import bgVideo from "../../assets/bgVideo.mp4";
import bgImg from "../../assets/video.png";
import { Link } from "react-router-dom";

import styles from "./Welcome.module.scss";

export const Welcome = () => {
  return (
    <div className={styles.main}>
      <video poster={bgImg} src={bgVideo} autoPlay muted loop></video>
      <div className={styles.mainWrapper}>
        <div className={styles.name}>
          Langify
          <p>Ти будеш знати!</p>
        </div>
        <Link to="/courses">Записатися на курс</Link>
      </div>
    </div>
  );
};
export default Welcome;
