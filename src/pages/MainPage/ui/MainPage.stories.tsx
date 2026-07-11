import type { Meta } from '@storybook/react';
import { MainPageUI } from './MainPage';
import { mockHabits } from '../../../mocks/habits';
import { useState } from 'react';
import type { Habit } from '../../../api/habitsApi'; 

const meta = {
    title: 'Pages/MainPageUI',
    component: MainPageUI,
    tags: ['autodocs'],
} satisfies Meta<typeof MainPageUI>;

export default meta;

// Интерактивная версия с состоянием
export const Interactive = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

    return (
        <MainPageUI
            habits={mockHabits}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            onDeleteHabit={(id) => alert(`Удалить привычку ${id}`)}
            onToggleHabit={(id, date) => alert(`Переключить привычку ${id} на ${date}`)}
            isAddModalOpen={isAddModalOpen}
            onOpenAddModal={() => setIsAddModalOpen(true)}
            onCloseAddModal={() => setIsAddModalOpen(false)}
            isEditModalOpen={isEditModalOpen}
            editingHabit={editingHabit}
            onOpenEditModal={(habit) => {
                setEditingHabit(habit);
                setIsEditModalOpen(true);
            }}
            onCloseEditModal={() => {
                setIsEditModalOpen(false);
                setEditingHabit(null);
            }}
        />
    );
};