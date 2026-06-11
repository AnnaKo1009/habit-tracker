import type { HeaderProps } from "./types";
import styles from "./Header.module.css";
import { Logo } from "../../shared/ui/logo";
import { Avatar } from "../../shared/ui/avatar/Avatar";
import { useState, useEffect } from "react";

export const Header: React.FC<HeaderProps> = ({
  variant,
  userName,
  userAvatar,
  onClick,
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
    <div className={`${styles.headerContainer} ${className}`}>
      <Logo
        variant="full"
        size="large"
        onClick={onClick}
        className={styles.logo}
      />

      {variant === "dashboard" && (
        <>
          <div className={styles.userContainer}>
            <span className={styles.timer}>
              Время сейчас: {now.toLocaleTimeString()}
            </span>
            <div className={styles.user}>
              <Avatar src={userAvatar} name={userName} size="small" className={styles.avatar} />
              <span className={styles.userName}>{userName}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
