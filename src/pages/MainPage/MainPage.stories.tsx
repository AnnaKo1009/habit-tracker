import type { Meta, StoryObj } from '@storybook/react';
import { MainPage } from './MainPage';
import { mockHabits } from '../../mocks/habits';

const meta = {
    title: 'Pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Default: Story = {
    args: {
        userName: 'Анна',
        userAvatar: 'https://doctor-veterinar.ru/images/mini-pig.png',
        habits: mockHabits,
        onAddHabit: () => alert('Добавить привычку'),
        onEditHabit: (id) => alert(`Редактировать привычку ${id}`),
        onDeleteHabit: (id) => alert(`Удалить привычку ${id}`),
        onToggleHabit: (id) => alert(`Переключить привычку ${id}`),
    },
};