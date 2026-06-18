import React, { useState } from 'react';
import { type FC } from 'react';
import type { ModalAddHabitUIProps } from './types';
import styles from './ModalAddHabit.module.css';
import { Input } from '../../../shared/ui/input';
import { Button } from '../../../shared/ui/button';
import { RadioGroup } from '../../../shared/ui/radio';
import { Modal } from '../../../shared/ui/modal';

const frequencyOptions = [
    { value: 'daily', label: 'Каждый день' },
    { value: 'weekly', label: 'Раз в неделю' },
    { value: 'custom', label: 'С интервалом' },
];


export const ModalAddHabitUI: FC<ModalAddHabitUIProps> = ({
    isOpen,
    onClose,
    name,
    setName,
    startDate,
    setStartDate,
    frequency,
    setFrequency,
    interval, 
    setInterval,
    onSubmit

}) => {



    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Новая привычка'>
        <div className={styles.addHabitContainer}>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Введите новую привычку'/>
          <input type="date" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))}/>
          <RadioGroup name='frequency' options={frequencyOptions} value={frequency} onChange={setFrequency}/>
          {frequency === 'custom' && ( 
            <input value={interval} onChange={(e) => setInterval(e.target.value)} placeholder='введите интервал' className={styles.intervalInput}/>
          )}
          <Button variant='secondary' onClick={onClose}>Отменить</Button>
          <Button variant ='primary' onClick={onSubmit}>Сохранить</Button>
         
        </div>
        </Modal>
    )
}
