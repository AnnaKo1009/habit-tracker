import type { Meta, StoryObj } from '@storybook/react';
import { HabitCardUI } from './HabitCard';
import { useState } from 'react';

const meta = {
    title: 'Widgets/HabitCardUI',
    component: HabitCardUI,
    tags: ['autodocs'],
} satisfies Meta<typeof HabitCardUI>;

export default meta;

export const Interactive = () => {
    const [habit, setHabit] = useState({
        id: '1',
        name: 'Пить воду',
        completed: false,
        completedDates: [],
        createdAt: new Date().toISOString().split('T')[0],
        startDate: new Date().toISOString().split('T')[0],
    });
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleToggle = (id: string) => {
        setHabit(prev => ({ ...prev, completed: !prev.completed }));
    };

    const handleEdit = (id: string) => {
        alert(`Редактировать: ${habit.name}`);
    };

    const handleDelete = (id: string) => {
        alert(`Удалить: ${habit.name}`);
    };

    return (
        <HabitCardUI
            habit={habit}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
            selectedDate={selectedDate}
        />
    );
};