import { useState, useEffect, type FC } from "react";
import { HeaderUI } from "./ui/Header";
import { useAppSelector } from "../../hooks/hooks";

export interface HeaderProps {
  variant: "dashboard" | "auth";
  className?: string;
  onClick?: () => void;
}

export const Header: FC<HeaderProps> = ({ variant, className = "" }) => {
  const [now, setNow] = useState(new Date());

  const userName = useAppSelector((state) => state.user.name);
  const userAvatar = useAppSelector((state) => state.user.avatar);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeaderUI
      variant={variant}
      userName={userName}
      userAvatar={userAvatar}
      className={className}
      now={now}
    />
  );
};
