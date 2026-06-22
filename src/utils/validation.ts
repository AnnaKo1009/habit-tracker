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