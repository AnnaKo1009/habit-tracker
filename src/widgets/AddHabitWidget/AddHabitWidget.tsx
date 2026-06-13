import { type FC } from 'react';
import { AddHabitWidgetUI } from './ui';

export interface AddHabitWidgetProps {
    onAdd?: () => void;
    className?: string;
    
}

export const AddHabitWidget: FC<AddHabitWidgetProps> = ({
    onAdd, 
    className
}) => {
    return ( <AddHabitWidgetUI onAdd={onAdd} className={className}/>

    )

}



