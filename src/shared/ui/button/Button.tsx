import React from 'react';
import type { ButtonProps } from './types';
import styles from './Button.module.css';
import { Icon } from '../icon/Icon';

export const Button: React.FC<ButtonProps> = ({
    children,
    disabled = false,
    onClick,
    className = '',
    variant = 'primary',
    iconName,

}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled && onClick) {
            onClick(event)
        }
    }
return (<button
   disabled={disabled}
    className={`${styles.button} ${styles[variant]} ${className}`}
    onClick={handleClick}
    >
       {iconName && variant === 'btnWithIcon' && (
        <Icon name={iconName} />
       )} 
       {iconName && variant === 'icon' && (
        <Icon name={iconName} />
       )} 
    {children}
</button>
);
};
