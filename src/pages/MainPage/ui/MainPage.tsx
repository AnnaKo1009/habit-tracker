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
    onAddHabit,
    onEditHabit,
    onDeleteHabit,
    onToggleHabit,
    selectedDate,
     onDateChange,
}) => {


const filteredHabits = habits.filter(habit => 
    habit.completedDates?.includes(selectedDate.toISOString().split('T')[0])
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
                        onEdit={() => onEditHabit(habit.id)}
                        onDelete={() => onDeleteHabit(habit.id)}
                        onToggle={() => onToggleHabit(habit.id)}/>

                    ))}
                    {filteredHabits.length === 0 && (
                        <div className={styles.emptyMessage}>
                            Нет привычек на выбранную дату
                        </div>
                    )}
                </div>
                <FunctionsPanel className={styles.functionsPanel} onAddHabit={onAddHabit} onDateChange={onDateChange}/>
            </div>
        </div>
    )

}
