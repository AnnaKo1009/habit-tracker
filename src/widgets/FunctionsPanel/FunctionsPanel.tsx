import { type FC } from 'react';
import { FunctionsPanelUI } from './ui/FunctionsPanel';

export interface FunctionsPanelProps {
    className?: string;
    onAddHabit: () => void;      
    onDateChange: (date: Date) => void;  

}

export const FunctionsPanel: FC<FunctionsPanelProps> = ({
    className,
    onAddHabit,      
    onDateChange,
}) => {
    return (
        <FunctionsPanelUI 
            className={className} 
            onAddHabit={onAddHabit} 
            onDateChange={onDateChange}
        />
    );
};
