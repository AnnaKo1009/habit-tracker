import { type FC } from 'react';
import type { HabitCardProps } from './HabitCard.types';
import { HabitCardUI } from './ui';

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
