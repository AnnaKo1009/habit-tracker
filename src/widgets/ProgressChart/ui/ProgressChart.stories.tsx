import type { Meta, StoryObj } from '@storybook/react';
import { ProgressChartUI } from './ProgressChart';

const meta = {
    title: 'Widgets/ProgressChartUI',
    component: ProgressChartUI,
    tags: ['autodocs'],
} satisfies Meta<typeof ProgressChartUI>;

export default meta;
type Story = StoryObj<typeof ProgressChartUI>;

// Данные за 30 дней
const generateMockData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        
        // Случайное количество выполнений от 0 до 8
        const count = Math.floor(Math.random() * 9);
        data.push({ date: dateString, count });
    }
    
    return data;
};

export const Default: Story = {
    args: {
        data: generateMockData(),
        title: 'Прогресс за месяц',
    },
};

export const WithCustomTitle: Story = {
    args: {
        data: generateMockData(),
        title: 'Выполнение привычек за последние 30 дней',
    },
};