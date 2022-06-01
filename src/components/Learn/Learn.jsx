import React from "react";
import eng from "../../assets/english.jpg";
import fr from "../../assets/frenchjpg.jpg";
import ger from "../../assets/german.jpg";
import pl from "../../assets/polish.jpg";
import photo from "../../assets/photo1.jpg";
import { Link } from "react-router-dom";

import styles from "./Learn.module.scss";

export const Learn = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Вивчайте разом з нами!</h1>
      <div className={styles.inner}>
        <img src={eng} alt="" />
        <div className={styles.block}>
          <h2>АНГЛІЙСЬКА МОВА</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
            Vestibulum morbi blandit cursus risus at ultrices. Ac turpis egestas integer
            eget. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Et
            netus et malesuada fames ac. Orci sagittis eu volutpat odio facilisis mauris
            sit amet. Dui id ornare arcu odio. Faucibus ornare suspendisse sed nisi lacus
            sed viverra.
          </p>
          <a href="/">Детальніше</a>
        </div>

        <div className={styles.block}>
          <h2>ФРАНЦУЗЬКА МОВА</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
            Vestibulum morbi blandit cursus risus at ultrices. Ac turpis egestas integer
            eget. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Et
            netus et malesuada fames ac. Orci sagittis eu volutpat odio facilisis mauris
            sit amet. Dui id ornare arcu odio. Faucibus ornare suspendisse sed nisi lacus
            sed viverra.
          </p>
          <a href="/">Детальніше</a>
        </div>
        <img src={fr} alt="" />
        <img src={ger} alt="" />
        <div className={styles.block}>
          <h2>НІМЕЦЬКА МОВА</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
            Vestibulum morbi blandit cursus risus at ultrices. Ac turpis egestas integer
            eget. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Et
            netus et malesuada fames ac. Orci sagittis eu volutpat odio facilisis mauris
            sit amet. Dui id ornare arcu odio. Faucibus ornare suspendisse sed nisi lacus
            sed viverra.
          </p>
          <a href="/">Детальніше</a>
        </div>

        <div className={styles.block}>
          <h2>ПОЛЬСЬКА МОВА</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
            Vestibulum morbi blandit cursus risus at ultrices. Ac turpis egestas integer
            eget. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Et
            netus et malesuada fames ac. Orci sagittis eu volutpat odio facilisis mauris
            sit amet. Dui id ornare arcu odio. Faucibus ornare suspendisse sed nisi lacus
            sed viverra.
          </p>
          <a href="/">Детальніше</a>
        </div>
        <img src={pl} alt="" />
      </div>

      <section>
        <img src={photo} alt="" />
        <div className={styles.text}>
          <h1>Прагнете вільно володіти мовами?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
            Vestibulum morbi blandit cursus risus at ultrices. Ac turpis egestas integer
            eget. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Et
            netus et malesuada fames ac. Orci sagittis eu volutpat odio facilisis mauris
            sit amet. Dui id ornare arcu odio. Faucibus ornare suspendisse sed nisi lacus
            sed viverra. Rhoncus aenean vel elit scelerisque. Arcu odio ut sem nulla
            pharetra diam sit amet nisl.
          </p>
          <Link to="/courses">Записатися на курс</Link>
        </div>
      </section>
    </div>
  );
};
export default Learn;
