"use client";

import styles from "./MainContent.module.scss";

export default function MainContent() {
  const handleClick = () => {
    alert("Welcome!");
  };

  return (
    <div className={styles.mainContent}>
      <h1>Main Content</h1>
      <p>This is an example of the home page content.</p>
      <button onClick={handleClick}>Read more</button>
    </div>
  );
}
