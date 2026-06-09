import type { Meta, StoryObj } from '@storybook/react';
import { HabitCard } from './HabitCard';
import { useState } from 'react';

const meta = {
  title: 'Components/HabitCard',
  component: HabitCard,
  tags: ['autodocs'],
} satisfies Meta<typeof HabitCard>;

export default meta;

// Интерактивная история с состоянием
export const Interactive = () => {
  const [habit, setHabit] = useState({
    id: 1,
    name: 'Пить воду',
    completed: false,
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
    <HabitCard
      habit={habit}
      onToggle={handleToggle}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};