import type { Habit } from '../../../widgets/HabitCard/ui/types';

export interface MainPageUIProps {
    habits: Habit[];
    selectedDate: Date;
    onEditHabit: (id: string, newName: string) => void;
    onDeleteHabit: (id: string) => void;
    onToggleHabit: (id: string, date: string) => void;
    onDateChange: (date: Date) => void; 
    isAddModalOpen: boolean;
    onOpenAddModal: () => void;
    onCloseAddModal: () => void;
}