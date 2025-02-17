"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import styles from "./dashboardLayout.module.scss";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  useAuth();

  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.body}>
        <aside className={styles.nav}>
          <Sidebar />
        </aside>

        <section className={styles.contentContainer}>{children}</section>
      </section>
    </section>
  );
};

export default DashboardLayout;
