import styles from "./ClearLinks.module.css";

function ClearLinks() {
  return (
    <button className={styles.button}>
      <i className="fas fa-trash" />
      ClearLinks
    </button>
  );
}

export default ClearLinks;
