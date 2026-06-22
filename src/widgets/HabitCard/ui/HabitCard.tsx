import { useState, type FC } from 'react';
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

    const [isExiting, setIsExiting] = useState(false); // для добавления класса exiting для анимации анимации

    const handleToggle = () => {
        setIsExiting(true);
        setTimeout(() => {
            onToggle(habit.id, selectedDateString);
        }, 300);
    }

    const handleDelete = () => {
        setIsExiting(true);
        setTimeout(() => {
            onDelete?.(habit.id);
        }, 300);
    }


    return (
        <div className={`${styles.card} ${isExiting ? styles.exiting : ''}`}>
            <Checkbox checked={isCompleted} onChange={handleToggle}/>
            <span className={styles.title}>{habit.name}</span>
            <div className={styles.actions}>
                <Button variant='icon' iconName='edit' size='small' onClick={() => onEdit?.(habit.id)} className={styles.iconButton}/>
                <Button variant='icon' iconName='delete' size='small' onClick={handleDelete} className={styles.iconButton}/>
            </div>
        </div>
    )

}