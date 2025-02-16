import Logo from "@/components/Logo";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import SearchInput from "@/components/Search";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.left}>
        <Logo />

        <SearchInput />
      </section>

      <section className={styles.right}>
        <p className={styles.docs}>Docs</p>

        <Bell size={16} className={styles.bell} />

        <section className={styles.userContainer}>
          <section className={styles.image}>
            <Image src="/user.png" alt="User image" fill />
          </section>
          <section className={styles.name}>
            <p>Adedeji</p>
            <ChevronDown size={12} />
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
