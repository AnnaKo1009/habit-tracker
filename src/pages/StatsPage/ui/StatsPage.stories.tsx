// pages/StatsPage/StatsPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { StatsPageUI } from './StatsPage';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'Pages/StatsPage',
    component: StatsPageUI,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof StatsPageUI>;

export default meta;
type Story = StoryObj<typeof StatsPageUI>;

// Мок-данные для привычек с прогрессом
const mockHabitsProgress = [
    { id: '1', name: '💧 Пить воду', progress: 75, completedDays: 12, totalDays: 16 },
    { id: '2', name: '🏋️ Зарядка', progress: 35, completedDays: 6, totalDays: 17 },
    { id: '3', name: '📚 Чтение', progress: 45, completedDays: 8, totalDays: 18 },
    { id: '4', name: '🧘 Медитация', progress: 85, completedDays: 14, totalDays: 16 },
    { id: '5', name: '🚶 Прогулка', progress: 20, completedDays: 4, totalDays: 20 },
];

export const Default: Story = {
    args: {
        habits: mockHabitsProgress,
        valueToday: 7,
        valueBest: 12,
        progressValue: 70,
        onReturnMain: () => console.log('На главную'),
        onEditProfile: () => console.log('Редактировать профиль'),
    },
};

export const Empty: Story = {
    args: {
        habits: [],
        valueToday: 0,
        valueBest: 0,
        progressValue: 0,
        onReturnMain: () => console.log('На главную'),
        onEditProfile: () => console.log('Редактировать профиль'),
    },
};