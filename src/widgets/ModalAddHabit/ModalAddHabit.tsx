import { useAppDispatch } from "../../hooks/hooks";
import { addHabit } from '../../store/habitsSlice';
import type { Habit } from "../HabitCard/ui/types";
import { ModalAddHabitUI } from "./ui/ModalAddHabit";
import { useState, type FC } from "react";

export interface ModalAddHabitProps {
    isOpen: boolean;
    onClose: () => void;

}

export const ModalAddHabit: FC<ModalAddHabitProps> = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [frequency, setFrequency] = useState("daily");
  const [interval, setInterval] = useState('1');

  const handleSubmit = () => {
    if (!name.trim()) return;

    const newHabit = {
        id: crypto.randomUUID(),
        name: name.trim(),
            completed: false,
            completedDates: [],
            createdAt: new Date().toISOString().split('T')[0],
            startDate: startDate.toISOString().split('T')[0],
            frequency: frequency as 'daily' | 'weekly' | 'custom',
            interval: frequency === 'custom' ? Number(interval) : undefined,
    }

    dispatch(addHabit(newHabit));
    onClose();
    setName('');
    setStartDate(new Date());
    setFrequency('daily');
    setInterval('1');
  }

  return (
    <ModalAddHabitUI 
        isOpen={isOpen} 
        onClose={onClose}
        name={name}
        setName={setName}
        startDate={startDate}
        setStartDate={setStartDate}
        frequency={frequency}
        setFrequency={setFrequency}
        interval={interval}
        setInterval={setInterval}
        onSubmit={handleSubmit}
        />


  )
};
