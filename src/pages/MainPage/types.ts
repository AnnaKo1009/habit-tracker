import type { Habit } from '../../widgets/HabitCard/ui/types';

export interface MainPageProps {
    userName: string;
    userAvatar?: string;
    habits: Habit[];
    onAddHabit?: () => void;
    onEditHabit?: (id: number) => void;
    onDeleteHabit?: (id: number) => void;
    onToggleHabit?: (id: number) => void;
}