import React from "react";
import img1 from "../../assets/Carusel1.jpg";
import img2 from "../../assets/Carusel2.jpg";
import img3 from "../../assets/Carusel3.jpg";
import img4 from "../../assets/Carusel4.jpg";
import styles from "./TeachersCarousel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    className={styles.imgCarusel}
    key={1}
    src={img1}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className={styles.imgCarusel}
    key={2}
    src={img2}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className={styles.imgCarusel}
    key={3}
    src={img3}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className={styles.imgCarusel}
    key={4}
    src={img4}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className={styles.imgCarusel}
    key={1}
    src={img1}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className={styles.imgCarusel}
    key={2}
    src={img2}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className={styles.imgCarusel}
    key={3}
    src={img3}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className={styles.imgCarusel}
    key={4}
    src={img4}
    onDragStart={handleDragStart}
    role="presentation"
  />,
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function TeachersCarousel() {
  return (
    <div className={styles.carusWrapper}>
      <AliceCarousel
        autoPlayInterval={1000}
        responsive={responsive}
        paddingLeft={200}
        paddingRight={100}
        infinite
        autoPlay
        mouseTracking
        items={items}
      />
    </div>
  );
}

export default TeachersCarousel;
