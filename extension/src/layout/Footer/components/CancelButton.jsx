import styles from "./CancelButton.module.css";
import useRouter from "../../../router/Router";

function CancelButton() {
  const router = useRouter();

  function handleClick() {
    router.navigate("/");
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Cancel
    </button>
  );
}

export default CancelButton;
