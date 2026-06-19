import type { Meta, StoryObj } from '@storybook/react';
import { ModalAddHabitUI } from './ModalAddHabit';
import { useState } from 'react';

const meta = {
    title: 'Widgets/ModalAddHabitUI',
    component: ModalAddHabitUI,
    tags: ['autodocs'],
} satisfies Meta<typeof ModalAddHabitUI>;

export default meta;

export const Interactive = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [frequency, setFrequency] = useState('daily');
    const [interval, setInterval] = useState('1');

    const handleSubmit = () => {
        alert('Привычка добавлена!');
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Открыть модалку</button>
            <ModalAddHabitUI
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