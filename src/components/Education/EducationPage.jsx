import React from "react";
import education from "../../data/education.json";
import styles from "./Education.module.css";

export function EducationPage() {
  return (
    <section id="education" className={styles.container}>
      <h1 className={styles.heading}>Education & Certifications</h1>
      <div className={styles.grid}>
        {education.map(({ title, duration, organization, details }, i) => (
          <div key={i} className={styles.card}>
            <h3>{title}</h3>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
            {organization && (
              <p>
                <strong>Organization:</strong> {organization}
              </p>
            )}
            {details &&
              (Array.isArray(details) ? (
                <ul>
                  {details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{details}</p>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
