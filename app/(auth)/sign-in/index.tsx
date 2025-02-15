import Logo from "@/components/Logo";
import SignInForm from "@/components/SignInForm";
import Image from "next/image";
import styles from "./signin.module.scss";

const SignIn = () => {
  return (
    <section className={styles.container}>
      <section className={styles.imageContainer}>
        <section className={styles.logo}>
          <Logo />
        </section>

        <section className={styles.image}>
          <Image src="/sign-in.png" alt="Welcome image" fill priority />
        </section>
      </section>

      <section className={styles.formContainer}>
        <SignInForm />
      </section>
    </section>
  );
};

export default SignIn;
