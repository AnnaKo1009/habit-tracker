import React from 'react';
import type { HabitCardProps } from './types';
import styles from './HabitCard.module.css';
import { Button } from '../../shared/ui/button/Button';
import { Checkbox } from '../../shared/ui/checkbox/Checkbox'


export const HabitCard: React.FC<HabitCardProps> = ({
    habit,
    onDelete,
    onEdit,
    onToggle,
    className=''
}) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <Checkbox checked={habit.completed} onChange={() => onToggle(habit.id)}/>
            <span className={styles.title}>{habit.name}</span>
            <div className={styles.actions}>
                <Button variant='icon' iconName='edit' size='small' onClick={() => onEdit?.(habit.id)} className={styles.iconButton}/>
                <Button variant='icon' iconName='delete' size='small' onClick={() => onDelete?.(habit.id)} className={styles.iconButton}/>
            </div>
        </div>
    )

}