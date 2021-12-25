import styles from "./HomeButton.module.css";
import useRouter from "../../../router/Router";

function HomeButton() {
  const router = useRouter();

  function handleClick() {
    router.navigate("/");
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <i className="fas fa-home" />
      Home
    </button>
  );
}

export default HomeButton;
