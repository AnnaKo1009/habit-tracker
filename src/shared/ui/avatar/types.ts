export interface AvatarProps {
    src?: string;
    name?: string;
    size?: 'small' | 'large';
    className?: string;
    children?: React.ReactNode;
}