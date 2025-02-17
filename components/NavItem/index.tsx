"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navItem.module.scss";

const NavItem = ({ imgUrl, description, link }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  const userPath = pathname === "/user" && description === "Users";

  return (
    <Link href={link}>
      <section
        className={styles.heading}
        style={{
          backgroundColor: isActive
            ? "var(--button-alpha)"
            : userPath
            ? "var(--button-alpha)"
            : "",
        }}
      >
        {(isActive || userPath) && <hr />}
        <Image
          src={imgUrl}
          alt={`${description} Icon`}
          width={16}
          height={16}
        />
        <p
          style={{
            color: isActive
              ? "var(--primary-text)"
              : userPath
              ? "var(--primary-text)"
              : "",
          }}
        >
          {description}
        </p>
      </section>
    </Link>
  );
};

export default NavItem;
