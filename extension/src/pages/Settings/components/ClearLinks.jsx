import useRouter from "../../../router/Router";
import styles from "./ClearLinks.module.css";

function ClearLinks() {
  const router = useRouter();

  function handleClick() {
    chrome.storage.local.set({
      links: [],
    });
    router.navigate("/");
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <i className="fas fa-trash" />
      ClearLinks
    </button>
  );
}

export default ClearLinks;
