export interface FunctionsPanelUIProps {
    onAddHabit: (name: string) => void;
    onDateChange: (date: Date) => void;
    selectedDate: Date;
    className?: string;
}