import React from 'react';
import type { LogoProps} from './types';
import styles from './Logo.module.css';


export const Logo: React.FC<LogoProps> = ({
    variant='full',
    size='large',
    className='',
    onClick,
}) => {

    const src = variant === 'full' ? "/images/logo-full.png" : "/images/logo-icon.png";

return (<img 
    src={src}
    alt={variant === 'full' ? 'HabitFlow logo' : 'HabitFlow icon'}
    className={`${styles.logo} ${styles[variant]} ${styles[size]} ${className}`}
    onClick={onClick}
    />
)
}