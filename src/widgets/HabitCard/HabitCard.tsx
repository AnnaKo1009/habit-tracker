import { type FC } from 'react';
import { HabitCardUI } from './ui';
import type { Habit } from '../../api/habitsApi'; 

export interface HabitCardProps {
    habit: Habit;
    className?: string;
    onDelete?: (id: string) => void;  
    onEdit?: (id: string) => void;    
    onToggle?: (id: string, date: string) => void;
    selectedDate: Date;
}

export const HabitCard: FC<HabitCardProps> = ({
    habit,
    className,
    onDelete,
    onEdit,
    onToggle,
    selectedDate,
}) => {
    const handleDeleteItem = (id: string) => {
        onDelete?.(id);
    }

    const handleEditItem = (id: string) => {
        onEdit?.(id);
    }

    const handleToggleItem = (id: string, date: string) => {
        onToggle?.(id, date);
    }

    return (
        <HabitCardUI habit={habit} className={className} onEdit={handleEditItem} onDelete={handleDeleteItem} onToggle={handleToggleItem} selectedDate={selectedDate} />
    )
}
