import React from 'react';
import type { UserPanelProps } from './types';
import styles from './UserPanel.module.css';
import { Avatar }  from '../../shared/ui/avatar/Avatar';
import { Button } from '../../shared/ui/button/Button';

export const UserPanel: React.FC<UserPanelProps> = ({
    userName,
    userAvatar,
    onEditProfile,
    className=''
}) => {
    return (< div className={`${styles.userPanelContainer} ${className}`}>
        <Avatar src={userAvatar} className={styles.avatar}/>
        <span className={styles.name}>{userName}</span>
        <Button variant='btnWithIcon' iconName='editProfile' className={styles.actionButton}  onClick={onEditProfile}>Редактировать профиль</Button>
        <Button variant='btnWithIcon' iconName='stats' className={styles.actionButton}  onClick={onEditProfile}>Посмотреть статистику</Button>
    </div>

    )
}