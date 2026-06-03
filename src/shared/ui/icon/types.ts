export interface IconProps {
    name: 'close' | 'delete' | 'edit' |  'add' | 'editProfile' | 'pictEdit';
    onClick?: () => void;
    className?: string;
    size?: number;

}