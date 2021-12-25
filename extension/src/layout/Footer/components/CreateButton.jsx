import { useEffect, useState } from "react";
import useRouter from "../../../router/Router";
import styles from "./CreateButton.module.css";
import { createOne } from "../../../database/Link";

function CreateButton() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  function handleClick() {
    createOne({ link: url });
    router.navigate("/");
  }

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      setUrl(url);
    });
  }, []);

  return (
    <button className={styles.button} onClick={handleClick}>
      Confirm
    </button>
  );
}

export default CreateButton;
