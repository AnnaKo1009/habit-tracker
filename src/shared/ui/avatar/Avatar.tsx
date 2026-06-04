import React from 'react';
import type { AvatarProps } from './types';
import styles from './Avatar.module.css';

export const Avatar: React.FC<AvatarProps> = ({
    src,
    name,
    size='large',
    className='',
    children,
}) => {
    const getFirstLetter = (name?: string) => {
        if (!name || name.length === 0) {
            return '?';
        }
        return name[0].toUpperCase();
    }

    const avatarContent = src ? (
    <img 
       src={src}
       alt={`${name || 'avatar'} avatar`}
       className={styles.image}
       />
 ) : (
    <span className={styles.initial}>{getFirstLetter(name)}</span>
 );

        return (<div 
        className={`${styles.avatar} ${styles[size]} ${className}`}>
            {avatarContent}
            {children && <div className={styles.overlay}>{children}</div>}
        </div>
    );
};

        
