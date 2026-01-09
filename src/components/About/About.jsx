import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About Nusrath – Web Developer 2250</h1>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              I’m passionate about building responsive, user-friendly websites
              using HTML, CSS, JavaScript, and React. I enjoy solving problems
              with clean, efficient code.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              I have experience creating efficient backend systems and APIs
              using Node.js and Express, with a strong understanding of
              databases like MySQL.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>
              I design clean, modern user interfaces. I’ve built landing pages
              and simple design systems focused on user experience and
              accessibility.
            </p>
          </div>
        </li>
      </ul>
      <div className={styles.aboutParagraph}>
        <p>
          Hello! I’m Nusrath, a passionate web developer with a background in
          Business Administration (BBA & MBA) and a diploma in Java and Frontend
          Development. This blend of business knowledge and technical skills
          helps me build user-friendly, purposeful web solutions. I love solving
          problems with clean code, learning new tools, and collaborating with
          others to create meaningful digital experiences.
        </p>
      </div>
    </section>
  );
};
