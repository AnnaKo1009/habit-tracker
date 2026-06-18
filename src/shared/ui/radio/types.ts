export interface RadioProps {
    value: string,      // выбранное значение 'daily', 'weekly', 'custom'
    name: string,      // Имя группы (общее для всех Radio)	'frequency'
    label: string,     // Текст, который видит пользователь
    checked: boolean, 
    onChange: (value: string) => void,
    className?: string,

}

export interface RadioOption {
    value: string,
    label: string,
}

export interface RadioGroupProps {
    options: RadioOption[],
    value: string,  //  текущее выбранное значение
    name: string,
    onChange: (value: string) => void,
    className?: string,
    direction?: 'horizontal' | 'vertical';

}