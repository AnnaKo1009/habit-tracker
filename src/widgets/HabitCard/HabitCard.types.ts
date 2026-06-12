import type { Habit } from './ui/types'; 

export interface HabitCardProps {
    habit: Habit;
    className?: string;
    onDelete?: (id: number) => void;  
    onEdit?: (id: number) => void;    
    onToggle?: (id: number) => void;
}