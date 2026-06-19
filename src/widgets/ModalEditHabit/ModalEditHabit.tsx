import { useAppDispatch } from "../../hooks/hooks";
import { editHabit } from "../../store/habitsSlice";
import type { Habit } from "../HabitCard/ui/types";
import { useState, type FC } from 'react';

export interface ModalEditHabit {
    isOpen: boolean;
    onClose: () => void;
    habit: Habit;
}

export const ModalEditHabit: FC<ModalEditHabit> = ({
    isOpen,
    onClose,
    habit
}) => {
    const [name, setName] = useState(habit.name);
    const [startDate, setStartDate] = useState(new Date (habit.startDate));
    const [ frequency, setFrequency] = useState(habit.frequency);
    const [interval, setInterval] = useState(String(habit.interval || 1));

    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        if (!name.trim()) return;

        dispatch(editHabit({
            id: habit.id, 
            name: name.trim(),
            startDate: startDate.toISOString().split('T')[0],
            frequency: frequency as 'daily' | 'weekly' | 'custom',
            interval: frequency === 'custom' ? Number(interval) : undefined,

        }));

        onClose();

    }
    return (
    <ModalEditHabitUI 
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
    
} 

