export interface HeaderPropsUI {
    variant: 'dashboard' | 'auth';
    userName?: string;
    userAvatar?: string;
    className?: string;
    onClick?: () => void;
    now: Date;
}