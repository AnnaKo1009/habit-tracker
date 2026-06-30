export interface HabitProgressItemUIProps {
    id: string;
    name: string;
    progress: number;
    completedDays: number;
    totalDays: number;
}

export interface HabitProgressListUIProps {
    habits: HabitProgressItemUIProps[];
    title?: string;
    className?: string;
}