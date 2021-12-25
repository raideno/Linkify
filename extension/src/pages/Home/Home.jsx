import { Link } from "../../components";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";

function Home() {
  const [links, setLinks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    chrome.storage.local.get("links", (result) => {
      setLinks(result.links ? result.links : []);
      setLoading(false);
    });
    chrome.storage.onChanged.addListener((changes, area) => {
      setLoading(true);
      chrome.storage.local.get("links", (result) => {
        setLinks(result.links ? result.links : []);
        setLoading(false);
      });
    });
  }, []);

  return !loading ? (
    <div className={styles.home}>
      {links.length === 0 ? (
        <div className={styles.text}>No Links Yet :(</div>
      ) : (
        <div className={styles.links}>
          {links.map((link, i) => (
            <Link data={link} key={"Home-link-" + i} />
          ))}
        </div>
      )}
    </div>
  ) : null; /*Add a loading screen*/
}

export default Home;
