import styles from "./AddButton.module.css";
import useRouter from "../../../router/Router";

function AddButton() {
  const { navigate } = useRouter();

  function handleClick() {
    console.log("Click");
    navigate("/addlink");
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Linkify
      <i className="fas fa-link" />
    </button>
  );
}

export default AddButton;
