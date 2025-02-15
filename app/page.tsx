import SignIn from "@/app/(auth)/sign-in";
import styles from "./page.module.scss";
// import Header from "@/components/Header";

export default function Home() {
  return (
    <section className={styles.page}>
      <SignIn />
      {/* <Header /> */}
      {/* <main className={styles.main}>Main</main> */}
    </section>
  );
}
