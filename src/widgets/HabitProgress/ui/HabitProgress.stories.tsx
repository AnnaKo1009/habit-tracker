import type { Meta, StoryObj } from '@storybook/react';
import { HabitProgressListUI } from './HabitProgress';

const meta = {
    title: 'Widgets/HabitProgressListUI',
    component: HabitProgressListUI,
    tags: ['autodocs'],
} satisfies Meta<typeof HabitProgressListUI>;

export default meta;
type Story = StoryObj<typeof HabitProgressListUI>;

const mockHabits = [
    {
        id: '1',
        name: '💧 Пить воду',
        progress: 75,
        completedDays: 12,
        totalDays: 16,
    },
    {
        id: '2',
        name: '🏋️ Утренняя зарядка',
        progress: 35,
        completedDays: 6,
        totalDays: 17,
    },
    {
        id: '3',
        name: '📚 Чтение',
        progress: 45,
        completedDays: 8,
        totalDays: 18,
    },
    {
        id: '4',
        name: '🧘 Медитация',
        progress: 85,
        completedDays: 14,
        totalDays: 16,
    },
    {
        id: '5',
        name: '🚶 Прогулка',
        progress: 20,
        completedDays: 4,
        totalDays: 20,
    },
];

export const Default: Story = {
    args: {
        habits: mockHabits,
        title: 'Прогресс по привычкам',
    },
};

export const Empty: Story = {
    args: {
        habits: [],
        title: 'Прогресс по привычкам',
    },
};

export const WithCustomTitle: Story = {
    args: {
        habits: mockHabits,
        title: 'Мои привычки за последние 30 дней',
    },
};