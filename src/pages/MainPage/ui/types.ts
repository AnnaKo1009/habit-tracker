import type { Habit } from '../../../widgets/HabitCard/ui/types';

export interface MainPageUIProps {
    userName: string;
    userAvatar?: string;
    habits: Habit[];
    selectedDate: Date;
    
    onAddHabit: (name: string) => void;
    onEditHabit: (id: string, newName: string) => void;
    onDeleteHabit: (id: string) => void;
    onToggleHabit: (id: string, date: string) => void;
    onDateChange: (date: Date) => void; 
}