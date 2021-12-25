import { useState } from "react";
import styles from "./styles.module.css";
import useRouter from "../../router/Router";
import SearchBar from "./components/SearchBar";
import Categorys from "./components/Categorys";
import HomeButton from "./components/HomeButton";

function Header() {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const pathname = router.navigation.pathname;

  switch (pathname) {
    case "/settings":
    case "/addlink":
      return <HomeButton />;
      break;

    default:
      return (
        <div className={styles.container}>
          <SearchBar {...{ search, setSearch }} />
          <Categorys />
        </div>
      );
      break;
  }
}

export default Header;
