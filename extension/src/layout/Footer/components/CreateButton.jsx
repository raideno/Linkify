import styles from "./CreateButton.module.css";

function CreateButton() {
  function handleClick() {
    console.log("Confirm");
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Confirm
    </button>
  );
}

export default CreateButton;
