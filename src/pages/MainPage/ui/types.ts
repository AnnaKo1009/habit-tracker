import type { Habit } from '../../../widgets/HabitCard/ui/types';

export interface MainPageUIProps {
    habits: Habit[];
    selectedDate: Date;
    onDeleteHabit: (id: string) => void;
    onToggleHabit: (id: string, date: string) => void;
    onDateChange: (date: Date) => void; 
    isAddModalOpen: boolean;
    onOpenAddModal: () => void;
    onCloseAddModal: () => void;
    isEditModalOpen: boolean;
    onOpenEditModal: (habit: Habit) => void;
    onCloseEditModal: () => void;
    editingHabit: Habit | null;
}