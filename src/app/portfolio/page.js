import styles from "./Portfolio.module.scss";

export default function PortfolioPage() {
  return (
    <div className={styles.portfolio}>
      <h1>Portfolio</h1>
      <div className={styles.grid}>
        <div className={styles.card}>Work 1</div>
        <div className={styles.card}>Work 2</div>
        <div className={styles.card}>Work 3</div>
      </div>
    </div>
  );
}
