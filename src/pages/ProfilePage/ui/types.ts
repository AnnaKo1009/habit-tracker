
export interface UserProps {
    name: string;
    avatar: string;
    birthDate: string;
    password: string;
    email: string;
}

export interface ProfilePageUIProps {
    user: UserProps;
    onSubmit: (user: UserProps) => void;
    className?: string;
    onThemeToggle: () => void;
    onStatsClick: () => void;
    onBack: () => void;

}