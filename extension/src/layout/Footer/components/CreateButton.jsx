import { useEffect, useState } from "react";
import useRouter from "../../../router/Router";
import styles from "./CreateButton.module.css";
import { createOne } from "../../../database/Link";

function CreateButton() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  function handleClick() {
    createOne({ link: url, title });
    router.navigate("/");
  }

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      let title = tabs[0].title;
      setUrl(url);
      setTitle(title);
    });
  }, []);

  return (
    <button className={styles.button} onClick={handleClick}>
      Confirm
    </button>
  );
}

export default CreateButton;
