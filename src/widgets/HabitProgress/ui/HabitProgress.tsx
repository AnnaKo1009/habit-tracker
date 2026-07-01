import type { HabitProgressListUIProps } from "./types";
import styles from './HabitProgress.module.css';
import type { FC } from "react";

export const HabitProgressListUI: FC<HabitProgressListUIProps> = ({
    habits,
    title='Статистика по каждой привычке за последние 30 дней',
    className=''
}) => {

    return (
        <div className={`${styles.container} ${className}`}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.list}>
                {habits.map((habit) => (
                    <div className={styles.habitItem}>
                        <div className={styles.habitInfo}>
                            <span className={styles.habitName}>{habit.name}</span>
                            <span className={styles.habitsStats}>{habit.completedDays}/{habit.totalDays}</span>
                        </div>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${habit.progress}%` }} />
                        </div>
                        <span className={styles.progressPercent}>{habit.progress}%</span>
                    </div>
                ))}
            </div>
        </div>
    )

}

