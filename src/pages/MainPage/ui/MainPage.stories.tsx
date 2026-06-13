import type { Meta, StoryObj } from '@storybook/react';
import { MainPageUI } from './MainPage';
import { mockHabits } from '../../../mocks/habits';
import { useState } from 'react';

const meta = {
    title: 'Pages/MainPageUI',
    component: MainPageUI,
    tags: ['autodocs'],
} satisfies Meta<typeof MainPageUI>;

export default meta;

// Интерактивная версия с состоянием
export const Interactive = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <MainPageUI
            userName="Анна"
            userAvatar="https://doctor-veterinar.ru/images/mini-pig.png"
            habits={mockHabits}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            onAddHabit={() => alert('Добавить привычку')}
            onEditHabit={(id) => alert(`Редактировать привычку ${id}`)}
            onDeleteHabit={(id) => alert(`Удалить привычку ${id}`)}
            onToggleHabit={(id) => alert(`Переключить привычку ${id}`)}
        />
    );
};