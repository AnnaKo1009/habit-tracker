import { type FC } from 'react';
import Calendar from 'react-calendar';
import type { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './HabitCalendar.module.css';

type Value = CalendarProps['value'];

 export interface HabitCalendarUIProps {
    value: Value;
    onChange: (value: Value) => void;
}


export const HabitCalendarUI: FC<HabitCalendarUIProps> = ({
    value,
    onChange
}) => {


    return ( 
        <div className={styles.container}>
            <Calendar
            onChange={onChange}
            value={value}
            />

        </div>
    );

};