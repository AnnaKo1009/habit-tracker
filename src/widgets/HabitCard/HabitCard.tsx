import { type FC } from 'react';
import { HabitCardUI } from './ui';

import type { Habit } from './ui/types'; 

export interface HabitCardProps {
    habit: Habit;
    className?: string;
    onDelete?: (id: number) => void;  
    onEdit?: (id: number) => void;    
    onToggle?: (id: number) => void;
}

export const HabitCard: FC<HabitCardProps> = ({
    habit,
    className,
    onDelete,
    onEdit,
    onToggle
}) => {
    const handleDeleteItem = (id: number) => {
        onDelete?.(id);
    }

    const handleEditItem = (id: number) => {
        onEdit?.(id);
    }

    const handleToggleItem = (id: number) => {
        onToggle?.(id);
    }

    return (
        <HabitCardUI habit={habit} className={className} onEdit={handleEditItem} onDelete={handleDeleteItem} onToggle={handleToggleItem} />
    )
}
