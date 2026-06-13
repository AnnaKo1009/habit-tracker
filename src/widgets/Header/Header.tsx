import { useState, useEffect, type FC } from "react";
import { HeaderUI } from './ui/Header' ;

export interface HeaderProps {
    variant: 'dashboard' | 'auth';
    userName?: string;
    userAvatar?: string;
    className?: string;
    onClick?: () => void;
}

export const Header: FC<HeaderProps> = ({
variant,
  userName,
  userAvatar,
  className = "",

}) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
    return (
        <HeaderUI variant={variant}
        userName={userName}
        userAvatar={userAvatar}
        className={className}
        now={now}
        />
    )
}


