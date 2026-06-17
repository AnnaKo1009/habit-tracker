import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { MainPageUI } from "./ui";
import { deleteHabit, editHabit, toggleHabitDate } from "../../store/habitsSlice";


export const MainPage = () => {
    const dispatch  = useAppDispatch();
    const habits = useAppSelector((state) => state.habits.items);
    const userName = useAppSelector((state) => state.user.name);
    const userAvatar = useAppSelector((state) => state.user.avatar);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDeleteHabit = useCallback((id: string) => {
        dispatch(deleteHabit(id))
    }, [dispatch])

    const handleEditHabit = useCallback((id: string, newName: string) => {
        if (!newName.trim()) return;
        dispatch(editHabit({id, name: newName.trim()}));
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
          onEditHabit={handleEditHabit}
          onDeleteHabit={handleDeleteHabit}
          onToggleHabit={handleToggleHabit}
          onDateChange={handleDateChange}

          />

    )
}
