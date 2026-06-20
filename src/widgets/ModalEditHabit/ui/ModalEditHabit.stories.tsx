import type { Meta, StoryObj } from '@storybook/react';
import { ModalEditHabitUI } from './ModalEditHabit';
import { useState } from 'react';

const meta = {
    title: 'Widgets/ModalEditHabit',
    component: ModalEditHabitUI,
    tags: ['autodocs'],
} satisfies Meta<typeof ModalEditHabitUI>;

export default meta;

const sampleHabit = {
    id: '1',
    name: 'Пить воду',
    completed: false,
    completedDates: ['2026-06-19'],
    createdAt: '2026-06-01',
    startDate: '2026-06-01',
    frequency: 'daily' as const,
    interval: undefined,
};

export const Interactive = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(sampleHabit.name);
    const [startDate, setStartDate] = useState(new Date(sampleHabit.startDate));
    const [frequency, setFrequency] = useState<string>(sampleHabit.frequency);
    const [interval, setInterval] = useState(String(sampleHabit.interval || 1));

    const handleSubmit = () => {
        alert('Привычка обновлена!');
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Редактировать привычку</button>
            <ModalEditHabitUI
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                name={name}
                setName={setName}
                startDate={startDate}
                setStartDate={setStartDate}
                frequency={frequency}
                setFrequency={setFrequency}
                interval={interval}
                setInterval={setInterval}
                onSubmit={handleSubmit}
            />
        </div>
    );
};