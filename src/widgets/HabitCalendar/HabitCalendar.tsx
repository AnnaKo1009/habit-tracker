import { type FC, useState} from 'react';
import { HabitCalendarUI } from './ui/HabitCalendar';
import type { CalendarProps } from 'react-calendar';


type Value = CalendarProps['value'];

 export interface HabitCalendarProps {
    onDateChange: (date: Date) => void;
}

export const HabitCalendar: FC<HabitCalendarProps> = ({ onDateChange}) => {

const [value, setValue] = useState<Value>(new Date());

const handleChange = (newValue: Value) => {
  setValue(newValue);
  if (newValue instanceof Date) {
    onDateChange?.(newValue);
  }
};

return (<HabitCalendarUI value={value} onChange={handleChange} />

)
}


