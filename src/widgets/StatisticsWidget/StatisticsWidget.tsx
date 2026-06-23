import { useAppSelector } from "../../hooks/hooks";
import { StatisticsWidgetUI } from "./ui/StatisticsWidget";
import { shouldShowHabit } from "../../utils/habitHelpers";


export interface StatisticsWidgetProps {
    selectedDate: Date;
    className?: string;
}

export const StatisticsWidget = ({ selectedDate, className }: StatisticsWidgetProps) => {
    const habits = useAppSelector((state) => state.habits.items);
    const selectedDateString = selectedDate.toLocaleDateString('en-CA');

    const visibleHabits = habits.filter(habit =>
        shouldShowHabit(habit, selectedDateString)
    )

    const completed = visibleHabits.filter(habit => 
        habit.completedDates.includes(selectedDateString)).length;

    const uncompleted = visibleHabits.filter((habit) => 
       !habit.completedDates.includes(selectedDateString)).length;

    return (
        <StatisticsWidgetUI 
        completed={completed}
        uncompleted={uncompleted}
        className={className}
        />
    )

}