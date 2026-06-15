import type { Habit } from '../../../widgets/HabitCard/ui/types';

export interface MainPageUIProps {
    userName: string;
    userAvatar?: string;
    habits: Habit[];
    selectedDate: Date;
    onAddHabit: (name: string) => void;
    onEditHabit: (id: number, newName: string) => void;
    onDeleteHabit: (id: number) => void;
    onToggleHabit: (id: number, date: string) => void;
    onDateChange: (date: Date) => void; 
}