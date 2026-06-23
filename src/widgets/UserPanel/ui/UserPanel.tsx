import { type FC } from 'react';
import type { UserPanelUIProps } from './types';
import styles from './UserPanel.module.css';
import { Avatar }  from '../../../shared/ui/avatar/Avatar';
import { Button } from '../../../shared/ui/button/Button';

export const UserPanelUI: FC<UserPanelUIProps> = ({
    userName,
    userAvatar,
    onEditProfile,
    onCheckStats,
    className=''
}) => {
    return (< div className={`${styles.userPanelContainer} ${className}`}>
        <Avatar src={userAvatar} className={styles.avatar} size='large'/>
        <span className={styles.name}>{userName}</span>
        <Button variant='btnWithIcon' iconName='editProfile' className={styles.actionButton}  onClick={onEditProfile}>Редактировать профиль</Button>
        <Button variant='btnWithIcon' iconName='stats' className={styles.actionButton}  onClick={onCheckStats}>Посмотреть полную статистику</Button>
    </div>

    )
}