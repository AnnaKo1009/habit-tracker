import { type FC } from 'react';
import type { HabitCardUIProps } from './types';
import styles from './HabitCard.module.css';
import { Button } from '../../../shared/ui/button';
import { Checkbox } from '../../../shared/ui/checkbox'


export const HabitCardUI: FC<HabitCardUIProps> = ({
    habit,
    onDelete,
    onEdit,
    onToggle,
    className='',
     selectedDate,
}) => {

    const selectedDateString = selectedDate.toLocaleDateString('en-CA'); 
    const isCompleted = habit.completedDates.includes(selectedDateString);


    return (
        <div className={`${styles.card} ${className}`}>
            <Checkbox checked={isCompleted} onChange={() => onToggle(habit.id, selectedDateString)}/>
            <span className={styles.title}>{habit.name}</span>
            <div className={styles.actions}>
                <Button variant='icon' iconName='edit' size='small' onClick={() => onEdit?.(habit.id)} className={styles.iconButton}/>
                <Button variant='icon' iconName='delete' size='small' onClick={() => onDelete?.(habit.id)} className={styles.iconButton}/>
            </div>
        </div>
    )

}