import styles from "./styles.module.css";
import UserCard from "./components/UserCard";
import AddButton from "./components/AddButton";

function Footer() {
  return (
    <div className={styles.container}>
      <UserCard />
      <AddButton />
    </div>
  );
}

export default Footer;
