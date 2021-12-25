import styles from "./styles.module.css";
import useRouter from "../../router/Router";
import UserCard from "./components/UserCard";
import AddButton from "./components/AddButton";
import CancelButton from "./components/CancelButton";
import CreateButton from "./components/CreateButton";

function Footer() {
  const router = useRouter();
  const pathname = router.navigation.pathname;

  switch (pathname) {
    case "/settings":
      return null;
      break;

    case "/addlink":
      /*Link Creation*/
      return (
        <div className={styles.container}>
          <CancelButton />
          <CreateButton />
        </div>
      );
      break;

    default:
      return (
        <div className={styles.container}>
          <UserCard />
          <AddButton />
        </div>
      );
      break;
  }
}

export default Footer;
