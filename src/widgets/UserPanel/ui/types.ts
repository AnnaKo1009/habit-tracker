export interface UserPanelUIProps {
    userName: string;
    userAvatar?: string;
    onEditProfile: () => void;
    onCheckStats: () => void;
    onExit: () => void;
    className?: string;
    
}