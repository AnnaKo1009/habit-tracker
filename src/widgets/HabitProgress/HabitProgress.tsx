import type { FC } from "react";
import { HabitProgressListUI, type HabitProgressListUIProps } from "./ui";


const mockHabits = [
    { id: '1', name: '💧 Пить воду', progress: 75, completedDays: 12, totalDays: 16 },
    { id: '2', name: '🏋️ Зарядка', progress: 35, completedDays: 6, totalDays: 17 },
    { id: '3', name: '📚 Чтение', progress: 45, completedDays: 8, totalDays: 18 },
];

export const HabitProgressList: FC<HabitProgressListUIProps> = ({
    title,
    className,
}) => {
    return (
        <HabitProgressListUI
        habits={mockHabits}
        title={title}
        className={className}
        />
    )
}