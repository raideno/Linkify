import React from "react";
import { Link } from "../../components";
import styles from "./styles.module.css";

function Home() {
  const links = new Array(7).fill(0);

  return (
    <div className={styles.home}>
      {links.length === 0 ? (
        <div className={styles.text}>No Links Yet :(</div>
      ) : (
        <div className={styles.links}>
          {links.map(() => (
            <Link />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
