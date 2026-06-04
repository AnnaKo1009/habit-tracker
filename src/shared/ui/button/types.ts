export interface ButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    variant?: 'primary'| 'secondary' | 'icon' | 'btnWithIcon';
    iconName?: 'add' | 'close' | 'delete' | 'edit' | 'editProfile' | 'pictEdit';
    size?: 'small' | 'medium' | 'large';
}