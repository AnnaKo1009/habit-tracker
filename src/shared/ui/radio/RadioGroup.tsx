import React from 'react';
import type { RadioGroupProps } from './types';
import { Radio } from './Radio';
import styles from './Radio.module.css';

export const RadioGroup: React.FC<RadioGroupProps> = ({
    value,
    options,
    onChange,
    name,
    className='',
    direction='vertical',
}) => {
    return (
        < div className={`${styles.radioGroup} ${className} ${styles[direction]} `}>
            {options.map((option) => (
                <Radio
                key={option.value}
                value={option.value}
                label={option.label}
                name={name}
                checked={value === option.value} // закрашивается та кнопка у которой совпадает ее value с value которое передают
                onChange={onChange}
                />
            ))}
        </div>
    )

}

