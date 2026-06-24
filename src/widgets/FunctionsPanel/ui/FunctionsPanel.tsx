import { type FC } from 'react';
import { AddHabitWidget } from "../../AddHabitWidget/AddHabitWidget";
import styles from './FunctionsPanel.module.css';
import type { FunctionsPanelUIProps } from "./types";
import { HabitCalendar } from "../../HabitCalendar/HabitCalendar";
import { StatisticsWidget } from '../../StatisticsWidget/StatisticsWidget';

export const FunctionsPanelUI: FC<FunctionsPanelUIProps> = ({
    onAddHabit,
    onDateChange, 
    selectedDate,
}) => {

    
    return (
        <div className={styles.panel}>
            <AddHabitWidget onAdd={onAddHabit}/>
            <HabitCalendar onDateChange={onDateChange}/>
            <StatisticsWidget selectedDate={selectedDate} />
        </div>
    )

}