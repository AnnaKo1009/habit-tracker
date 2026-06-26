export const validateHabitName = (name: string): string => {

    if (!name.trim()) {
        return 'Введите название привычки';
    }

    if (name.length > 100) {
        return 'Название не должно превышать 100 символов';
    }

    if (/[<>{}[\]()|\\/"'`&%$#@]/.test(name)) {
        return 'Название содержит недопустимые символы';
    }

    return '';
}

export const validateUserName = (name: string): string => {
    if (!name.trim()) {
        return 'Введите имя';
    }

    if (name.length > 20) {
        return 'Имя не должно превышать 20 символов';
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ0-9\s-]+$/.test(name)) {
        return 'Имя может содержать только буквы, цифры, пробелы и дефис';
    }

    return '';
}

export const validateUserPassword = (password: string): string  => {
    if (!password.trim()) {
        return 'Введите пароль';
    }

    if (password.length > 20) {
        return 'Пароль не должен содержать более 20 символов';
    }

    if (password.length < 6) {
        return 'Пароль должен содержать минимум 6 символов';
    }
    

   if (!/^[A-Za-z0-9!@#$%&*?_]+$/.test(password)) {
        return 'Пароль может содержать только латинские буквы, цифры и символы ! @ # $ % & * ? _';
    }
    
    return '';

}

export const validateUserEmail = (email: string): string => {
    if (!email.trim()) {
        return 'Введите email';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Введите корректный email'
    }

    return '';
}
