import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>odrjr</h1>
        <p className={styles.description}>
          Indie Game Developer
        </p>
        <p className={styles.description}>
          Computer Science Student @ Texas A&M University
        </p>
        <a href="mailto:itsodrjr@itsodrjr.dev" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Pinto Bean!"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
