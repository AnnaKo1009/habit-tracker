import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { StatsPageUI } from "./ui";


const mockHabitsProgress = [
    { id: '1', name: '💧 Пить воду', progress: 75, completedDays: 12, totalDays: 16 },
    { id: '2', name: '🏋️ Зарядка', progress: 35, completedDays: 6, totalDays: 17 },
    { id: '3', name: '📚 Чтение', progress: 45, completedDays: 8, totalDays: 18 },
];

export const StatsPage: FC = () => {
    const navigate= useNavigate();

    const handleReturnMain = () => navigate('/main');
    const handleEditProfile = () => navigate('/profile');

    return (
        <StatsPageUI
        habits={mockHabitsProgress}
        valueToday={7}
        valueBest={15}
        progressValue={93}
        onEditProfile={handleEditProfile}
        onReturnMain={handleReturnMain}
        />

    )
}
