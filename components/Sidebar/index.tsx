import NavItem from "@/components/NavItem";
import { businessesNavList, customersNavList, settingsNavList } from "@/data";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <section className={styles.heading}>
        <Image
          src="./briefcase.svg"
          alt="Briefcase Icon"
          width={16}
          height={16}
        />
        <p>Switch Organization</p>
        <ChevronDown size={16} />
      </section>

      <nav className={styles.navbar}>
        <section className={styles.heading}>
          <Image src="./home.svg" alt="Dashboard Icon" width={16} height={16} />
          <p className={styles.text}>Dashboard</p>
        </section>

        <section>
          <h5>CUSTOMERS</h5>

          {customersNavList.map(({ description, imgUrl, link }, index) => (
            <NavItem
              key={index}
              imgUrl={imgUrl}
              description={description}
              link={link}
            />
          ))}
        </section>
        <section>
          <h5>BUSINESSES</h5>

          {businessesNavList.map(({ description, imgUrl, link }, index) => (
            <NavItem
              key={index}
              imgUrl={imgUrl}
              description={description}
              link={link}
            />
          ))}
        </section>
        <section>
          <h5>SETTINGS</h5>

          {settingsNavList.map(({ description, imgUrl, link }, index) => (
            <NavItem
              key={index}
              imgUrl={imgUrl}
              description={description}
              link={link}
            />
          ))}
        </section>
      </nav>
    </section>
  );
};

export default Sidebar;
