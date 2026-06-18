import React from 'react';
import type { RadioProps } from './types';
import styles from './Radio.module.css';

// export const Radio: React.FC<RadioProps> = ({ 
//     checked=false, 
//     onChange,
//     value,
//     name,
//     label,
//     className='',
// }) => {
//     return (
//         <div className={`${styles.radioContainer} ${className}`}>
//         <input
//         type="radio"
//         name={name}
//         value={value}
//         className={styles.radio}
//         checked={checked}
//         onChange={(e) => onChange(e.target.value)}
//         />
//         <span className={`${styles.customRadio} ${checked ? styles.checked : ''}`}/>
//         <label className={styles.label}>{label}</label>
//         </div>
//     )

// }


export const Radio: React.FC<RadioProps> = ({ 
    checked = false, 
    onChange,
    value,
    name,
    label,
    className = '',
}) => {
    const id = `radio-${name}-${value}`;

    return (
        <div className={`${styles.radioContainer} ${className}`}>
            <input
                type="radio"
                name={name}
                value={value}
                id={id}
                className={styles.radio}
                checked={checked}
                onChange={(e) => onChange(e.target.value)}
            />
            <span className={`${styles.customRadio} ${checked ? styles.checked : ''}`} />
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};