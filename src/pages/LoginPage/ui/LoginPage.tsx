import type { LoginPageUIProps } from "./types";
import styles from "./LoginPage.module.css";
import { useState, type FC } from "react";
import { Header } from "../../../widgets/Header";
import { Input } from "../../../shared/ui/input";
import {
  validateUserName,
  validateUserPassword,
} from "../../../utils/validation";
import { Button } from "../../../shared/ui/button";

export const LoginPageUI: FC<LoginPageUIProps> = ({
  onSubmit,
  onRegisterClick,
  className = "",
  serverError='',
  isLoading = false,
}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmitForm = () => {
    const nameError = validateUserName(name);
    if (nameError) {
      setValidationError(nameError);
      return;
    }

    const passwordError = validateUserPassword(password);
    if (passwordError) {
      setValidationError(passwordError);
      return;
    }

    setValidationError("");
    onSubmit({ username: name, password });
  };

  return (
    <div className={styles.page}>
      <Header variant="auth" />
      <div className={styles.mainContent}>
        <div className={styles.loginContainer}>
          <div className={styles.inputSection}>
            <div className={styles.inputContainer}>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                placeholder="Имя пользователя"
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className={styles.input}
              />
            </div>
            {validationError && <span className={styles.error}>{validationError}</span>}
            {serverError && <span className={styles.error}>{serverError}</span>}
          </div>
          <div className={styles.buttonSection}>
            <Button variant="secondary" onClick={onRegisterClick}>
              Зарегистрироваться
            </Button>
            <Button variant="primary" onClick={handleSubmitForm}>
              Войти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
