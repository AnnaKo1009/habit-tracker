import { useState, type FC } from "react";
import type { RegisterPageUIProps } from "./types";
import styles from "./RegisterPage.module.css";
import { Header } from "../../../widgets/Header";
import { Input } from "../../../shared/ui/input";
import { Button } from "../../../shared/ui/button";
import {
  validateUserEmail,
  validateUserName,
  validateUserPassword,
} from "../../../utils/validation";

export const RegisterPageUI: FC<RegisterPageUIProps> = ({
  onSubmit,
  className = "",
  isLoading,
  serverError,
  onBackClick,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  const handleSumbitForm = () => {
    const nameError = validateUserName(name);
    if (nameError) {
      setError(nameError);
      return;
    }

    const emailError = validateUserEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    const passwordError = validateUserPassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setError("");
    onSubmit({ username: name, email, birthDate, password });
  };


  return (
    <div className={styles.page}>
      <Header variant="auth" />
      <div className={styles.mainContent}>
        <div className={styles.regContainer}>
          <div className={styles.inputSection}>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Имя пользователя"
            />
          </div>
          <div className={styles.inputSection}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Email"
            />
          </div>
          <div className={styles.inputSection}>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.inputSection}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Пароль"
            />
          </div>
          {error && <span className={styles.error}>{error}</span>}
          <div className={styles.buttonSection}>
            <Button variant="secondary" onClick={onBackClick}>
              К странице входа
            </Button>
            <Button variant="primary" onClick={handleSumbitForm}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
