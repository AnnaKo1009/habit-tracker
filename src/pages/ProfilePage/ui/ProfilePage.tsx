import { useRef, useState, type FC } from "react";
import { type ProfilePageUIProps } from "./types";
import styles from "./ProfilePage.module.css";
import { Header } from "../../../widgets/Header";
import { Button } from "../../../shared/ui/button";
import { Input } from "../../../shared/ui/input";
import { Avatar } from "../../../shared/ui/avatar";

export const ProfilePageUI: FC<ProfilePageUIProps> = ({
  user,
  onSubmit,
  onStatsClick,
  onThemeToggle,
  onBack,
  className = "",
}) => {
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);
  const [email, setEmail] = useState(user.email);
  const [birthDate, setBirthDate] = useState(user.birthDate);
  const [password, setPassword] = useState(user.password);

    const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditAvatarClick = () => {
    fileInputRef.current?.click();
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target?.result as string);
            }
            reader.readAsDataURL(file);
        }
        
    }

  const handleSubmit = () => {
    onSubmit({ name, avatar, email, birthDate, password });
  };

  return (
    <div className={styles.page}>
      <Header variant="dashboard" />
      <div className={styles.mainContent}>
        <div className={styles.actionsPanel}>
          <Button
            variant="btnWithIcon"
            iconName="stats"
            onClick={onThemeToggle}
          >
            Сменить тему
          </Button>
          <Button variant="btnWithIcon" iconName="stats" onClick={onStatsClick}>
            Посмотреть подробную статистику
          </Button>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.avatarContainer}>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          <Avatar src={avatar} className={styles.avatar} size="large">
            <Button
              variant="icon"
              iconName="pictEdit"
              size="small"
              onClick={handleEditAvatarClick}
            />
          </Avatar>
          </div>
          <div className={styles.changesContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.field}>
            <span className={styles.label}>Имя пользователя</span>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Дата рождения</span>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className={styles.input}
          />
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Email</span>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Пароль</span>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          </div>
          </div>
          </div>
          <div className={styles.buttonSection}>
            <Button variant="secondary" onClick={onBack}>Назад
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Сохранить
            </Button>
          </div>
          </div>
        </div>
      </div>
  );
};
