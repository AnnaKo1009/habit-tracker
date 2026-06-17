export interface HeaderPropsUI {
    variant: 'dashboard' | 'auth';
    className?: string;
    onClick?: () => void;
    now: Date;
    userName: string;    
    userAvatar?: string;
}