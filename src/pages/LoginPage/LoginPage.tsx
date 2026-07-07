import { useState, type FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginPageUI } from "./ui";
import { setUser } from "../../store/userSlice";

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (data: { login: string; password: string }) => {
    setIsLoading(true);
    setError("");

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
    login: data.login,
    password: data.password
    }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Ошибка входа');
        }

        dispatch(setUser({
          id: result.user.id,
          name: result.user.name,
          email: result.user.email,
          avatar: result.user.avatar,
          birthDate: result.user.birthDate,
        }));

        localStorage.setItem('token', result.token);

        navigate('/main');

    } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка входа');
    } finally {
        setIsLoading(false);
    }
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
