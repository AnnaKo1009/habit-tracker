import React, {useEffect, useState} from "react";
import { Header } from "../../widgets/Header/ui";
import { UserPanel } from "../../widgets/UserPanel";
import { HabitCard } from "../../widgets/HabitCard/ui";
import { FunctionsPanel } from "../../widgets/FunctionsPanel/ui";
import type { MainPageProps } from "./types";
import styles from './MainPage.module.css'

export const MainPage: React.FC<MainPageProps> = ({
     userName,
    userAvatar,
    habits,
    onAddHabit,
    onEditHabit,
    onDeleteHabit,
    onToggleHabit,
}) => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleLogoClick = () => {
        console.log('Logo clicked')
    }

    const handleEditProfile = () => {
        console.log('Edit profile')
    }

    const handleAddItem = () => {
        onAddHabit?.();
    }
   const handleEditItem = (id: number) => {
        onEditHabit?.(id);
    };

    const handleDeleteItem = (id: number) => {
        onDeleteHabit?.(id);
    };

    const handleToggleItem = (id: number) => {
        onToggleHabit?.(id);
    };

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };

    const selectedDateString = selectedDate.toISOString().split('T')[0];

const filteredHabits = habits.filter(habit => 
    habit.completedDates?.includes(selectedDateString)
);

    return (
        <div className={styles.page}>
            <Header variant='dashboard' userName={userName} userAvatar={userAvatar} className={styles.header} onClick={handleLogoClick}/>
            <div className={styles.mainContent}>
                <UserPanel userName={userName} userAvatar={userAvatar} onEditProfile={handleEditProfile} className={styles.userPanel}/>
                <div className={styles.habitsContainer}>
                    {filteredHabits.map(habit => (
                        <HabitCard 
                        key={habit.id}
                        habit={habit}
                        onEdit={handleEditItem}
                        onDelete={handleDeleteItem}
                        onToggle={handleToggleItem}/>

                    ))}
                </div>
                <FunctionsPanel className={styles.functionsPanel} onAddHabit={handleAddItem} onDateChange={handleDateChange}/>
            </div>
        </div>
    )

}
