// "use client";

import Logo from "@/components/Logo";
import SearchInput from "@/components/Search";
import Image from "next/image";
import styles from "./header.module.scss";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

const Header = () => {
  // const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <section className={styles.left}>
        {/* <section
          className={styles.hamburger}
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          {openSidebar ? <X size={16} /> : <Menu size={16} />}
        </section> */}

        <Logo />

        <SearchInput />
      </section>

      <section className={styles.right}>
        <p className={styles.docs}>Docs</p>

        <Image src="./bell.svg" alt="Bell Icon" width={16} height={16} />

        <section className={styles.userContainer}>
          <section className={styles.image}>
            <Image src="/user.png" alt="User image" fill />
          </section>
          <section className={styles.name}>
            <p>Adedeji</p>
            <Image
              src="./dropdown.svg"
              alt="Dropdown Icon"
              width={15}
              height={15}
            />
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
