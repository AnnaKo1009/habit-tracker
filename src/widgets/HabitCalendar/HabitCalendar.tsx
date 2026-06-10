import { useState } from 'react';
import Calendar from 'react-calendar';
import type { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './HabitCalendar.module.css';
import type { HabitCalendarProps } from './types';

type Value = CalendarProps['value'];

export const HabitCalendar: React.FC<HabitCalendarProps> = ({
    onDateChange
}) => {

    const [value, setValue] = useState<Value>(new Date());

    const handleChange = (newValue: Value) => {
        setValue(newValue);
        if (newValue instanceof Date) {
            onDateChange?.(newValue);
        }
    }

    return ( 
        <div className={styles.container}>
            <Calendar
            onChange={handleChange}
            value={value}
            />

        </div>
    );

};