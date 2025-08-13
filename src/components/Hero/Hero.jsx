import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nusrath</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>

        {/* Button container */}
    <div className={styles.buttonGroup}>
      <a href="#projects" className={styles.btn}>
        My Work
      </a>
      <a href="assets/Nusrath-Jahan-CV.pdf" target="_blank" rel="noopener noreferrer">
        <button className={styles.cvBtn}>Resume</button>
      </a>
      <a href="mailto:nusrath@email.com" className={styles.btn}>
        Contact
      </a>
    </div>
      </div>
      <img
        src={getImageUrl("hero/Nusrath_Jahan.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
