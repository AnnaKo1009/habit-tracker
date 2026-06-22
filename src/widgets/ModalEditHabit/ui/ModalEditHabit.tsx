import type { ModalEditHabitUIProps} from './types';
import styles from './ModalEditHabit.module.css';
import { useState, type FC } from 'react';
import { Modal } from '../../../shared/ui/modal';
import { Input } from '../../../shared/ui/input';
import { RadioGroup } from '../../../shared/ui/radio';
import { Button } from '../../../shared/ui/button';
import { validateHabitName } from '../../../utils/validation';


const frequencyOptions = [
    { value: 'daily', label: 'Каждый день' },
    { value: 'weekly', label: 'Раз в неделю' },
    { value: 'custom', label: 'С интервалом' },
];

export const ModalEditHabitUI: FC<ModalEditHabitUIProps> = ({
    isOpen,
    onClose,
    onSubmit,
    name,
    setName,
    startDate,
    setStartDate,
    frequency,
    setFrequency,
    interval,
    setInterval,

}) => {

    const [error, setError] = useState('');

    const handleSubmit = () => {
        const errorMessage = validateHabitName(name);
        if (errorMessage) {
            setError(errorMessage);
            return;
            
        }

        setError('');
        onSubmit();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Редактирование привычки'>
            <div className={styles.editContainer}>
                <Input value={name} onChange={(e) => setName(e.target.value)} className={styles.input}/>
                {error && <span className={styles.error}>{error}</span>}
                <input type="date" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))} className={styles.dateInput}/>
                <RadioGroup name='frequency' options={frequencyOptions} value={frequency} onChange={(value) => setFrequency(value)}/>
                { frequency === 'custom' && (
                    <input value={interval} onChange={(e) => setInterval(e.target.value)} className={styles.intervalInput} placeholder='Введите интервал'/>
                )}
                <div className={styles.buttonSection}>
                    <Button variant='secondary' onClick={onClose}>Отмена</Button>
                    <Button variant='primary' onClick={handleSubmit} disabled={!name.trim()}>Сохранить</Button>
                </div>
            </div>
        </Modal>

    )
}



