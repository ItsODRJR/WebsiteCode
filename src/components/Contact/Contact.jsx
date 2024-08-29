import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:itsodrjr@itsodrjr.dev"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/oscar-rodriguez-jr-36a5a3314/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/itsodrjr"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>
        <li className={styles.link}>
        <a href="https://www.discord.gg/qhdGzVqn"><img src={getImageUrl("contact/discord.png")} alt="Discord icon" /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.roblox.com/groups/5734939/ItsODRJR#!/about"><img src={getImageUrl("contact/roblox.png")} alt="Roblox icon" /></a>
        </li>
      </ul>
      </div> 
    </footer>
  );
};
