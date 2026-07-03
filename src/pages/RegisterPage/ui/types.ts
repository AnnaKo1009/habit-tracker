export interface RegisterUserProps {
    username: string;
    email: string;
    birthDate: string;
    password: string;
}

export interface RegisterPageUIProps {
    onSubmit: (data: RegisterUserProps) => void;
    className?: string;
    isLoading: boolean;
    serverError: string;
    onBackClick: () => void;

}