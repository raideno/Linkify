import styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch }) {
  function handleClick() {
    if (!search) return;
    setSearch();
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={search || ""}
        placeholder="Search"
        className={styles.input}
        onChange={({ target }) => setSearch(target.value)}
      />
      <div className={styles.icon} onClick={handleClick}>
        <i className={search ? "fas fa-times-circle" : "fas fa-search"} />
      </div>
    </div>
  );
}

export default SearchBar;
