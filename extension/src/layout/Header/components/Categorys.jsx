import styles from "./Categorys.module.css";

function Categorys() {
  return (
    <div className={styles.select}>
      <select>
        <option>Tout</option>
        <option value="1">💻 Dev</option>
        <option value="2">🥪 Cuisine</option>
        <option value="3">💄 Mode</option>
        <option value="4">✈️ Travel</option>
      </select>
    </div>
  );
}

export default Categorys;
