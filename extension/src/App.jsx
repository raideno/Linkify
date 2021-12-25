/*global chrome*/

import Layout from "./layout";
import styles from "./App.module.css";
import useRouter from "./router/Router";
import { Home, AddLink, Settings } from "./pages";
import { useState } from "react";

function App() {
  const router = useRouter();
  const pathname = router.navigation.pathname;

  const [url, setUrl] = useState("NULL");

  useState(() => {
    try {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url = tabs[0].url;
        setUrl(url);
      });
    } catch (err) {
      console.log("Prblm");
    }
  }, []);

  return (
    <div className={styles.App}>
      <Layout>
        {pathname === "/" ? (
          <Home />
        ) : pathname === "/settings" ? (
          <Settings />
        ) : (
          <AddLink />
        )}
      </Layout>
    </div>
  );
}

export default App;
