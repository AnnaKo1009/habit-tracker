export interface Habit {
    id: string;
    name: string;
    completed: boolean;
    createdAt: string;
    startDate: string;
    completedDates: string[];
    frequency: 'daily' | 'weekly' | 'custom';
    interval?: number;

}

export interface HabitCardUIProps {
    habit: Habit;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onToggle: (id: string, date: string) => void;
    className?: string;
    selectedDate: Date;

}