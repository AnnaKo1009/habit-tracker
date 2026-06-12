export interface UserPanelUIProps {
    userName: string;
    userAvatar?: string;
    onEditProfile: () => void;
    onCheckStats: () => void;
    className?: string;
    
}