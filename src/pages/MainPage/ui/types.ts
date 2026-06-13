import type { Habit } from '../../../widgets/HabitCard/ui/types';

export interface MainPageUIProps {
    userName: string;
    userAvatar?: string;
    habits: Habit[];
    onAddHabit: () => void;
    onEditHabit: (id: number) => void;
    onDeleteHabit: (id: number) => void;
    onToggleHabit: (id: number) => void;
    selectedDate: Date;
    onDateChange: (date: Date) => void; 
}