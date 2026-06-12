import type { HeaderPropsUI } from "./types";
import { type FC } from 'react';
import styles from "./Header.module.css";
import { Logo } from '../../../shared/ui/logo'
import { Avatar } from '../../../shared/ui/avatar';


export const HeaderUI: FC<HeaderPropsUI> = ({
  variant,
  userName,
  userAvatar,
  onClick,
  className = "",
  now,
}) => {


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
