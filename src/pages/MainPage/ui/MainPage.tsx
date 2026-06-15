import { type FC} from "react";
import { Header } from "../../../widgets/Header";
import { UserPanel } from "../../../widgets/UserPanel";
import { HabitCard } from "../../../widgets/HabitCard";
import { FunctionsPanel } from "../../../widgets/FunctionsPanel";
import type { MainPageUIProps } from "./types";
import styles from './MainPage.module.css'

export const MainPageUI: FC<MainPageUIProps> = ({
    userName,
    userAvatar,
    habits,
    selectedDate,
    onAddHabit,
    onEditHabit,
    onDeleteHabit,
    onToggleHabit,
    onDateChange,
}) => {
    
    const selectedDateString = selectedDate.toISOString().split('T')[0];
    const filteredHabits = habits.filter(habit => 
    habit.completedDates?.includes(selectedDateString)
);

    return (
        <div className={styles.page}>
            <Header variant='dashboard' userName={userName} userAvatar={userAvatar}/>
            <div className={styles.mainContent}>
                <UserPanel userName={userName} userAvatar={userAvatar}/>
                <div className={styles.habitsContainer}>
                    {filteredHabits.map(habit => (
                        <HabitCard 
                        key={habit.id}
                        habit={habit}
                        onEdit={(id) => onEditHabit(id, prompt ('Новое название') || habit.name )}
                        onDelete={onDeleteHabit}
                        onToggle={(id) => onToggleHabit(id, selectedDateString)}/>

                    ))}
                    {filteredHabits.length === 0 && (
                        <div className={styles.emptyMessage}>
                            Нет привычек на выбранную дату
                        </div>
                    )}
                </div>
                <FunctionsPanel onAddHabit={ () => onAddHabit(prompt('Название привычки') || '')} onDateChange={onDateChange}/>
            </div>
        </div>
    )

}
