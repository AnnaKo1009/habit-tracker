import { useState, type FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginPageUI } from "./ui";

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (data: { username: string; password: string }) => {
    setIsLoading(true);
    setError("");

    // try {
    //     const response = await fetch('/api/login', {
    //         method: 'POST',
    //         headers: { 'Content=Type': 'application/json'},
    //         body: JSON.stringify(data),
    //     });

    //     const result = await response.json();

    //     if (!response.ok) {
    //         throw new Error(result.message || 'Ошибка входа');
    //     }

    //     dispatch(loginUser(result.user));

    //     navigate('/');

    // } catch (err) {
    //     setError(err instanceof Error ? err.message : 'Ошибка входа');
    // } finally {
    //     setIsLoading(false);
    // }

    setTimeout(() => {
      if (data.username === "admin" && data.password === "123456") {
        navigate("/main");
      } else {
        setError("Неверное имя пользователя или пароль");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <LoginPageUI
      onSubmit={handleSubmit}
      onRegisterClick={handleRegisterClick}
      isLoading={isLoading}
      serverError={error}
    />
  );
};
