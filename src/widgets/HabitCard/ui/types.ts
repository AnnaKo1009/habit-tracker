import type { Habit } from '../../../api/habitsApi';

export interface HabitCardUIProps {
  habit: Habit; 
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onToggle: (id: string, date: string) => void;
  className?: string;
  selectedDate: Date;
}

export type { Habit };
