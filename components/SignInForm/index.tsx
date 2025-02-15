"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./signinForm.module.scss";
import { useState } from "react";

type Data = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = (data) => console.log(data);

  return (
    <section className={styles.formContainer}>
      <section className={styles.formHeader}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <section className={styles.inputContainer}>
          <input
            {...register("email", {
              required: "Enter a valid email address.",
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address.",
              },
            })}
            placeholder="Email"
            type="email"
            style={{
              borderColor: errors.email ? "var(--red)" : "",
            }}
          />
          <small style={{ color: "var(--red)" }}>{errors.email?.message}</small>
        </section>

        <section className={styles.inputContainer}>
          <section style={{ position: "relative" }}>
            <input
              {...register("password", {
                required: "Invalid password, min. of 6 char.",
                minLength: {
                  value: 6,
                  message: "Invalid password, min. of 6 char.",
                },
              })}
              placeholder="Password (Min. of 6 char.)"
              type={showPassword ? "text" : "password"}
              style={{
                borderColor: errors.password ? "var(--red)" : "",
              }}
            />
            <small
              className={styles.passwordIcon}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </small>
          </section>
          <small>{errors.password?.message}</small>
        </section>

        <p>FORGOT PASSWORD?</p>

        <input type="submit" value="LOG IN" />
      </form>
    </section>
  );
};

export default SignInForm;
