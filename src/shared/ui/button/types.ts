export interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    variant?: 'primary'| 'secondary' | 'icon' | 'btnWithIcon';
}