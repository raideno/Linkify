import styles from "./style.module.css";

function Link() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo} />
        <div className={styles.texts}>
          <div className={styles.title}>Comment Faire...</div>
          <div className={styles.description}>Une vidéo youtube po...</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.icon}>
          <i className="fas fa-2x fa-external-link-alt" />
        </div>
      </div>
    </div>
  );
}

export default Link;
