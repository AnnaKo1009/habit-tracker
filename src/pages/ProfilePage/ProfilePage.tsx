import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import type { UserProps } from "./ui/types";
import { updateUserAvatar, updateUserBirthdate, updateUserEmail, updateUserName, updateUserPassword } from "../../store/userSlice";
import { ProfilePageUI } from "./ui";

export const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user);

    const handleSubmit = (updatedUser: UserProps) => {
        dispatch(updateUserName(updatedUser.name));
        dispatch(updateUserBirthdate(updatedUser.birthDate));
        dispatch(updateUserAvatar(updatedUser.avatar));
        dispatch(updateUserEmail(updatedUser.email));
        dispatch(updateUserPassword(updatedUser.password));
    }

    const handleThemeToggle = () => {
         // TODO: переключение темы
         console.log('Тема переключена');
    }

    const handleStatsClick = () => {
        navigate('/stats');
    }

    const handleBackClick = () => {
        navigate('/')
    }

    return (
        <ProfilePageUI
        user={user}
        onSubmit={handleSubmit}
        onStatsClick={handleStatsClick}
        onThemeToggle={handleThemeToggle}
        onBack={handleBackClick}
        />
    )
}
