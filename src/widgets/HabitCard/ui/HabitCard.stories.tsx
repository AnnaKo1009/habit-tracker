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
        id: 1,
        name: 'Пить воду',
        completed: false,
        completedDates: [],
    });

    const handleToggle = (id: number) => {
        setHabit(prev => ({ ...prev, completed: !prev.completed }));
    };

    const handleEdit = (id: number) => {
        alert(`Редактировать: ${habit.name}`);
    };

    const handleDelete = (id: number) => {
        alert(`Удалить: ${habit.name}`);
    };

    return (
        <HabitCardUI
            habit={habit}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};