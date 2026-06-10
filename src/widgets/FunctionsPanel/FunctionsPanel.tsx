import { AddHabitWidget } from "../AddHabitWidget";
import { HabitCalendar } from "../HabitCalendar/HabitCalendar";
import styles from './FunctionsPanel.module.css';
import type { FunctionsPanelProps } from "./types";

export const FunctionsPanel: React.FC<FunctionsPanelProps> = ({
    onAddHabit,
    onDateChange
}) => {
    return (
        <div className={styles.panel}>
            <AddHabitWidget onAdd={onAddHabit}/>
            <HabitCalendar onDateChange={onDateChange}/>
            <div className={styles.placeholder}>
                {/* Здесь позже будет график статистики */}
                <p>Статистика появится позже</p>
            </div>
        </div>
    )

}