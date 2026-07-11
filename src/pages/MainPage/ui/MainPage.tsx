import { type FC } from "react";
import { Header } from "../../../widgets/Header";
import { UserPanel } from "../../../widgets/UserPanel";
import { HabitCard } from "../../../widgets/HabitCard";
import { FunctionsPanel } from "../../../widgets/FunctionsPanel";
import { ModalAddHabit } from "../../../widgets/ModalAddHabit/ModalAddHabit";
import type { MainPageUIProps } from "./types";
import styles from "./MainPage.module.css";
import { shouldShowHabit } from "../../../utils/habitHelpers";
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

  const filteredHabits = habits.filter((habit) => 
    shouldShowHabit(habit, selectedDateString)
);
  
const uncompleted = filteredHabits.filter(
  habit => !habit.logs.some(log => log.date === selectedDateString && log.completed)
);

const completed = filteredHabits.filter(
  habit => habit.logs.some(log => log.date === selectedDateString && log.completed)
);


  return (
    <div className={styles.page}>
      <Header variant="dashboard" />
      <div className={styles.mainContent}>
        <UserPanel />
        <div className={styles.habitsContainer}>
          {uncompleted.map((habit) => (
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
          {completed.map((habit) => (
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
        <FunctionsPanel onDateChange={onDateChange} onAddHabit={onOpenAddModal} selectedDate={selectedDate} />
        <ModalAddHabit isOpen={isAddModalOpen} onClose={onCloseAddModal}/>
        { editingHabit &&
        <ModalEditHabit isOpen={isEditModalOpen} onClose={onCloseEditModal} habit={editingHabit}/>
}
      </div>
    </div>
  );
};


