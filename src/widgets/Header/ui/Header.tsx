import type { HeaderPropsUI } from "./types";
import { type FC } from "react";
import styles from "./Header.module.css";
import { Logo } from "../../../shared/ui/logo";
import { Avatar } from "../../../shared/ui/avatar";
import { Button } from "../../../shared/ui/button";
import { useTheme } from "../../../hooks/useTheme";

export const HeaderUI: FC<HeaderPropsUI> = ({
  variant,
  onClick,
  className = "",
  now,
  userName,
  userAvatar,
}) => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? "moon" : "sun";

  return (
    <div className={`${styles.headerContainer} ${className}`}>
      <Logo
        variant="full"
        size="large"
        onClick={onClick}
        className={styles.logo}
      />
      {variant === "auth" && (
        <Button
          variant="icon"
          iconName={themeIcon}
          onClick={toggleTheme}
          className={styles.themeButtonAuth}
        ></Button>
      )}
      {variant === "dashboard" && (
        <>
          <div className={styles.userContainer}>
            <span className={styles.timer}>
              Время сейчас: {now.toLocaleTimeString()}
            </span>
            <div className={styles.user}>
              <Button
                variant="icon"
                iconName={themeIcon}
                onClick={toggleTheme}
                className={styles.themeButton}
              ></Button>
              <div className={styles.userInfo}>
                <Avatar
                  src={userAvatar}
                  name={userName}
                  size="small"
                  className={styles.avatar}
                />
                <span className={styles.userName}>{userName}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
