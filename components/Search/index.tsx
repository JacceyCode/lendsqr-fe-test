import { Search } from "lucide-react";
import styles from "./searchInput.module.scss";

const SearchInput = () => {
  return (
    <section className={styles.search}>
      <input type="text" placeholder="Search for anything" />
      <section className={styles.searchIcon}>
        <Search size={16} color="white" />
      </section>
    </section>
  );
};

export default SearchInput;
