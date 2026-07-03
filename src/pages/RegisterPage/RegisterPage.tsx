import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterPageUI } from "./ui";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (data: {
    username: string;
    email: string;
    birthDate: string;
    password: string;
  }) => {
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      if (!data.username || !data.email || !data.password) {
        setError("Все поля обязательны для заполнения");
        setIsLoading(false);
        return;
      }

      // Успешная регистрация
      // В реальном приложении здесь был бы запрос к серверу
      console.log("Регистрация успешна:", data);

      navigate("/main");
      setIsLoading(false);
    }, 1000);

    // Когда будет сервер, заменить setTimeout на fetch:
    // try {
    //     const response = await fetch('/api/register', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data),
    //     });
    //
    //     const result = await response.json();
    //
    //     if (!response.ok) {
    //         throw new Error(result.message || 'Ошибка регистрации');
    //     }
    //
    //     // После успешной регистрации → на страницу входа
    //     navigate('/login');
    // } catch (err) {
    //     setError(err instanceof Error ? err.message : 'Ошибка регистрации');
    // } finally {
    //     setIsLoading(false);
    // }
  };

  const handleBackClick = () => {
    navigate("/login");
  };
  return (
    <RegisterPageUI
      onSubmit={handleSubmit}
      isLoading={isLoading}
      serverError={error}
      onBackClick={handleBackClick}
    />
  );
};
