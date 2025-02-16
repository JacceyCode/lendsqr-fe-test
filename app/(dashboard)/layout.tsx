"use client";

import Header from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  useAuth();

  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default DashboardLayout;
