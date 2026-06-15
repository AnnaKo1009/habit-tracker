import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { MainPageUI } from "./ui";


export const MainPage = () => {
    const dispatch  = useAppDispatch();
    const habits = useAppSelector((state) => state.habits.items);
    const userName = useAppSelector((state) => state.user.name);
    const userAvatar = useAppSelector((state) => state.user.avatar);

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <MainPageUI
          userName={userName}
          userAvatar={userAvatar}
          habits={habits}
          selectedDate={selectedDate}
          onAddHabit={handleAddHabit}
          onEditHabit={handleEditHabit}
          onDeleteHabit={handleDeleteHabit}
          onToggleHabit={handleToggleHabit}
          onDateChange={handleDateChange}

          />

    )
}
