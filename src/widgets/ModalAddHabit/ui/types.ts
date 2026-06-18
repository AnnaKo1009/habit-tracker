export interface ModalAddHabitUIProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    name: string;
    startDate: Date;
    frequency: string;
    interval: string;
    setName: (value: string) => void;
    setStartDate: (value: Date) => void;
    setFrequency: (value: string) => void;
    setInterval: (value: string) => void;

}