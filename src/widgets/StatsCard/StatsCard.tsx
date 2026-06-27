import type { FC } from "react";
import { StatsCardUI } from "./ui";

export interface StatsCardProps {
    value: number;
    label: string;
    icon: 'today' | 'best' | 'progress';
    color: string;
    className?: string;
}

export const StatsCard: FC<StatsCardProps> = ({
    value, 
    label,
    icon,
    color,
    className,

}) => {

    return (
        <StatsCardUI
        value={value}
        label={label}
        icon={icon}
        color={color}
        className={className}
        />
    )
}