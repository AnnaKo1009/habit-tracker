import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { MainPageUI } from "./ui";
import { deleteHabit, editHabit, toggleHabitDate } from "../../store/habitsSlice";
import type { Habit } from "../../widgets/HabitCard/ui/types";


export const MainPage = () => {
    const dispatch  = useAppDispatch();
    const habits = useAppSelector((state) => state.habits.items);
    const userName = useAppSelector((state) => state.user.name);
    const userAvatar = useAppSelector((state) => state.user.avatar);


    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

    const handleEditHabit = (habit: Habit) => {
        setEditingHabit(habit);
        setIsEditModalOpen(true);
    }

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditingHabit(null);
    }

    const handleDeleteHabit = useCallback((id: string) => {
        dispatch(deleteHabit(id))
    }, [dispatch])

    const handleToggleHabit = useCallback((id: string, date: string) => {
        dispatch(toggleHabitDate({id, date}));
    }, [dispatch])

    const handleDateChange = useCallback((date: Date) => {
        setSelectedDate(date);
    }, [])

    return (
        <MainPageUI
          habits={habits}
          selectedDate={selectedDate}
          onDeleteHabit={handleDeleteHabit}
          onToggleHabit={handleToggleHabit}
          onDateChange={handleDateChange}
          isAddModalOpen={isAddModalOpen}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onCloseAddModal={() => setIsAddModalOpen(false)}
          isEditModalOpen={isEditModalOpen}
          editingHabit={editingHabit}
          onOpenEditModal={handleEditHabit}
          onCloseEditModal={handleCloseEditModal}


          />

    )
}
