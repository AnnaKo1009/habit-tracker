import type { Meta, StoryObj } from '@storybook/react';
import { StatsCardUI } from './StatsCard';

const meta = {
    title: 'Widgets/StatsCardUI',
    component: StatsCardUI,
    tags: ['autodocs'],
} satisfies Meta<typeof StatsCardUI>;

export default meta;
type Story = StoryObj<typeof StatsCardUI>;

export const Today: Story = {
    args: {
        value: 7,
        label: 'Выполнено сегодня',
        icon: 'today',
        color: '#14B8A6',
    },
};

export const Best: Story = {
    args: {
        value: 12,
        label: 'Лучшая серия',
        icon: 'best',
        color: '#F59E0B',
    },
};

export const Progress: Story = {
    args: {
        value: 70,
        label: 'Выполняемость',
        icon: 'progress',
        color: '#F19CBB',
    },
};

// Все карточки в ряд
export const AllCards = () => (
    <div style={{ display: 'flex', gap: '16px' }}>
        <StatsCardUI value={7} label="Выполнено сегодня" icon="today" color="#14B8A6" />
        <StatsCardUI value={12} label="Лучшая серия" icon="best" color="#F59E0B" />
        <StatsCardUI value={70} label="Процент выполняемости" icon="progress" color="#F19CBB" />
    </div>
);