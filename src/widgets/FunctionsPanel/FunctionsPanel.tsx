import { type FC } from 'react';
import type { FunctionsPanelProps } from './FunctionsPanel.types';
import { FunctionsPanelUI } from './ui/FunctionsPanel';

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
