import styles from "./styles.module.css";
import Setting from "./components/Setting";
import ClearLinks from "./components/ClearLinks";

function Settings() {
  return (
    <div className={styles.container}>
      <Setting name={"Synchronisation"} />
      <Setting name={"Ferme Le"} />
      <ClearLinks />
    </div>
  );
}

export default Settings;
