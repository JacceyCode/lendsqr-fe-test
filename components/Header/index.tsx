import Logo from "@/components/Logo";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <section>
        <Logo />
        <p>Logo</p>
      </section>
      <section>
        <p>Header style</p>
      </section>
    </header>
  );
};

export default Header;
