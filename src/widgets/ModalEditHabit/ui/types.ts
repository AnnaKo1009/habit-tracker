     export interface ModalEditHabitUIProps {
        isOpen: boolean;
        onClose: () => void;
        onSubmit: () => void;
        name: string;
        setName: (value: string) => void;
        startDate: Date;
        setStartDate: (value: Date) => void;
        frequency: string;
        setFrequency: (value: string) => void;
        interval: string;
        setInterval: (value: string) => void;
     }
