import { useMemo, type FC } from "react";
import { ProgressChartUI } from "./ui";
import { useAppSelector } from "../../hooks/hooks";

export interface ProgressChartProps {
    title?: string;
    className?: string;
}

export const ProgressChart: FC<ProgressChartProps> = ({ title, className }) => {
    const habits = useAppSelector((state) => state.habits.items);

    const data = useMemo(() => {
        const result = [];
        const today = new Date();

        for (let i = 29; i >=0 ; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateString = date.toISOString().split('T')[0];

            const count = habits.filter(h =>
            h.logs.some(log => log.date === dateString && log.completed)
        ).length;

        result.push({date: dateString, count})

        }

        return result;
    }, [habits])

    
    return (
        <ProgressChartUI
        data={data}
        title={title}
        className={className}
        />
    )

}