import type { Habit } from '../widgets/HabitCard/ui/types';

export const mockHabits: Habit[] = [
    { id: 1, name: 'Пить воду', completed: false, completedDates: ['2026-06-13', '2026-06-11'] },
    { id: 2, name: 'Зарядка', completed: true, completedDates: ['2026-06-14'] },
    { id: 3, name: 'Заниматься программированием', completed: true, completedDates: ['2026-06-13'] },
    { id: 4, name: 'Заниматься китайским', completed: true, completedDates: ['2026-06-13'] },
    { id: 5, name: 'Сходить на прогулку', completed: true, completedDates: ['2026-06-12'] },
];