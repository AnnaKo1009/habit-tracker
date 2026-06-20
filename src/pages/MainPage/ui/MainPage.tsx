import { type FC } from "react";
import { Header } from "../../../widgets/Header";
import { UserPanel } from "../../../widgets/UserPanel";
import { HabitCard } from "../../../widgets/HabitCard";
import { FunctionsPanel } from "../../../widgets/FunctionsPanel";
import { ModalAddHabit } from "../../../widgets/ModalAddHabit/ModalAddHabit";
import type { MainPageUIProps } from "./types";
import styles from "./MainPage.module.css";
import type { Habit } from "../../../widgets/HabitCard/ui/types";
import { ModalEditHabit } from "../../../widgets/ModalEditHabit";

export const MainPageUI: FC<MainPageUIProps> = ({
  habits,
  selectedDate,
  onDeleteHabit,
  onToggleHabit,
  onDateChange,
  isAddModalOpen,
  onOpenAddModal,
  onCloseAddModal,
  isEditModalOpen,
  onOpenEditModal,
  onCloseEditModal, 
  editingHabit,
}) => {
  const selectedDateString = selectedDate.toLocaleDateString("en-CA");

  // НИЖЕ dateString — это ДЕНЬ В КАЛЕНДАРЕ, который смотрит пользователь
  // habit.startDate — это ДАТА НАЧАЛА привычки

  const shouldShowHabit = (habit: Habit, dateString: string): boolean => {
    if (habit.startDate > dateString) return false;

    if (habit.completedDates.includes(dateString)) return true;

    const startDate = new Date(habit.startDate + "T00:00:00");
    const currentDate = new Date(dateString + "T00:00:00");
    const daysDiff = Math.floor(
      (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    switch (habit.frequency) {
      case "daily":
        return true;
      case "weekly":
        return daysDiff % 7 === 0;
      case "custom":
        const interval = habit.interval;
        if (!interval) return false; 
        return daysDiff % interval === 0;
      default:
        return true;
    }
  };
  const filteredHabits = habits.filter((habit) => 
    shouldShowHabit(habit, selectedDateString)
);
  


  return (
    <div className={styles.page}>
      <Header variant="dashboard" />
      <div className={styles.mainContent}>
        <UserPanel />
        <div className={styles.habitsContainer}>
          {filteredHabits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              selectedDate={selectedDate}
              onEdit={() =>
                onOpenEditModal(habit)
              }
              onDelete={onDeleteHabit}
              onToggle={(id) => onToggleHabit(id, selectedDateString)}
            />
          ))}
          {filteredHabits.length === 0 && (
            <div className={styles.emptyMessage}>
              Нет привычек на выбранную дату
            </div>
          )}
        </div>
        <FunctionsPanel onDateChange={onDateChange} onAddHabit={onOpenAddModal} />
        <ModalAddHabit isOpen={isAddModalOpen} onClose={onCloseAddModal}/>
        { editingHabit &&
        <ModalEditHabit isOpen={isEditModalOpen} onClose={onCloseEditModal} habit={editingHabit}/>
}
      </div>
    </div>
  );
};
