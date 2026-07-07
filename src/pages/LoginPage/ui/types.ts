export interface LoginDataProps {
    login: string;
    password: string;
}

export interface LoginPageUIProps {
    onSubmit: (data: LoginDataProps) => void;
    className?: string;
    onRegisterClick: () => void;
    serverError: string;
    isLoading?: boolean;
}

