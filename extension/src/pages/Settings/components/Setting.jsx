import styles from "./Setting.module.css";

function Setting({ name }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{name}</div>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}

export default Setting;
