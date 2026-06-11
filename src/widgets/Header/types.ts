export interface HeaderProps {
    variant: 'dashboard' | 'auth';
    userName?: string;
    userAvatar?: string;
    className?: string;
    onClick?: () => void;
}