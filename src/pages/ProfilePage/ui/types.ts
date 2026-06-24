
export interface UserProps {
    name: string;
    avatar: string;
    email: string;
    birthDate: string;
}

export interface ProfilePageUIProps {
    user: UserProps;
    onSubmit: (user: UserProps) => void;
    className?: string;
    onThemeToggle: () => void;
    onStatsClick: () => void;
    onBack: () => void;

}