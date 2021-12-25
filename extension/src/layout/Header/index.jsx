import { useState } from "react";
import styles from "./styles.module.css";
import SearchBar from "./components/SearchBar";
import Categorys from "./components/Categorys";

function Header() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <SearchBar {...{ search, setSearch }} />
      <Categorys />
    </div>
  );
}

export default Header;
