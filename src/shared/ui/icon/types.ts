export interface IconProps {
    name: 'close' | 'delete' | 'edit' |  'add' | 'editProfile' | 'pictEdit' | 'stats';
    onClick?: () => void;
    className?: string;
    size?: number;

}