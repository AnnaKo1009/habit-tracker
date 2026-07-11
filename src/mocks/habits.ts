import type { Habit } from '../api/habitsApi';

export const mockHabits: Habit[] = [
  {
    id: '1',
    name: 'Пить воду',
    createdAt: '2026-06-01',
    startDate: '2026-06-12',
    frequency: 'daily',
    updatedAt: '2026-06-01',
    userId: 'user-1',
    logs: [
      { date: '2026-06-16', completed: true },
      { date: '2026-06-12', completed: true },
      { date: '2026-06-13', completed: true },
    ],
  },
  {
    id: '2',
    name: 'Зарядка',
    createdAt: '2026-06-01',
    startDate: '2026-06-11',
    frequency: 'custom',
    interval: 3,
    updatedAt: '2026-06-01',
    userId: 'user-1',
    logs: [
      { date: '2026-06-11', completed: true },
      { date: '2026-06-17', completed: true },
    ],
  },
];