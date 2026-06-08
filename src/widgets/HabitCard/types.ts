export interface Habit {
    id: number;
    name: string;
    completed: boolean;

}

export interface HabitCardProps {
    habit: Habit;
    onEdit?: (id: number) => void;
    onDelete?: (id: number) => void;
    onToggle: (id: number) => void;
    className?: string;

}