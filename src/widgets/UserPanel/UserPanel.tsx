import { type FC } from 'react';
import { UserPanelUI } from './ui/UserPanel';

export interface UserPanelProps {
    userName: string;
    userAvatar?: string;
    className?: string;
}

export const UserPanel: FC<UserPanelProps> = ({
    userName,
    userAvatar,
    className
}) => {
    const handleEditProfile = () => {
        // TODO: открыть модалку редактирования профиля
        console.log('Edit profile clicked');
    };

    const handleCheckStats = () => {
        // TODO: открыть модалку статистики профиля
        console.log('Stats clicked');
    }

    return (
        <UserPanelUI
        userName={userName}
        userAvatar={userAvatar}
        className={className}
        onEditProfile={handleEditProfile}
        onCheckStats={handleCheckStats}
        />
    );

};