export interface Habit {
    id: string;
    name: string;
    frequency: 'daily' | 'weekly' | 'custom';
    interval?: number;
    startDate: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    logs: {
        date: string; completed: boolean 
    }[];

 }