import { type FC } from 'react';
import { AddHabitWidget } from "../../AddHabitWidget/AddHabitWidget";
import styles from './FunctionsPanel.module.css';
import type { FunctionsPanelUIProps } from "./types";
import { HabitCalendar } from "../../HabitCalendar/HabitCalendar";

export const FunctionsPanelUI: FC<FunctionsPanelUIProps> = ({
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