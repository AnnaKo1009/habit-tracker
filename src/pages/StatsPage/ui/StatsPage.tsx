import type { FC } from "react";
import type { StatsPageUIProps } from "./types";
import styles from "./StatsPage.module.css";
import { Header } from "../../../widgets/Header";
import { Button } from "../../../shared/ui/button";
import { StatsCard } from "../../../widgets/StatsCard";
import { ProgressChart } from "../../../widgets/ProgressChart";
import { HabitProgressList } from "../../../widgets/HabitProgress";

export const StatsPageUI: FC<StatsPageUIProps> = ({
  onReturnMain,
  onEditProfile,
  valueToday,
  valueBest,
  progressValue,
  habits,
}) => {
  return (
    <div className={styles.page}>
      <Header variant="dashboard" />
      <div className={styles.mainContent}>
        <div className={styles.actionsPanel}>
          <Button variant="btnWithIcon" iconName="back" onClick={onReturnMain} className={styles.actionButton}>
            На главную
          </Button>
          <Button variant="btnWithIcon" iconName="editProfile" onClick={onEditProfile} className={styles.actionButton}>
            Редактировать профиль
          </Button>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.cardsContainer}>
            <StatsCard
              className={styles.card}
              value={valueToday}
              label="Выполнено сегодня"
              icon="today"
              color="#14B8A6"
            />
            <StatsCard
              className={styles.card}
              value={valueBest}
              label="Лучшая серия"
              icon="best"
              color="#F59E0B"
            />
            <StatsCard
              className={styles.card}
              value={progressValue}
              label="Процент общего выполнения"
              icon="progress"
              color="#F19CBB"
            />
          </div>
          <ProgressChart />
          <HabitProgressList
            habits={habits}
            title="Прогресс по каждой привычке"
          />
        </div>
      </div>
    </div>
  );
};
