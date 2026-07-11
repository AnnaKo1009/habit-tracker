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
        habit.logs.some(log => log.date === selectedDateString && log.completed)).length;

    const uncompleted = visibleHabits.filter((habit) => 
       !habit.logs.some(log => log.date === selectedDateString && log.completed)).length;

    return (
        <StatisticsWidgetUI 
        completed={completed}
        uncompleted={uncompleted}
        className={className}
        selectedDate={selectedDate}
        />
    )

}