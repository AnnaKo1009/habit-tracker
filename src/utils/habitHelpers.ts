import type { Habit } from "../widgets/HabitCard/ui/types";

export const shouldShowHabit = (habit: Habit, dateString: string): boolean => {
    if (habit.startDate > dateString) return false;

    if (habit.completedDates.includes(dateString)) return true;

    const startDate = new Date(habit.startDate + "T00:00:00");
    const currentDate = new Date(dateString + "T00:00:00");
    const daysDiff = Math.floor(
      (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    switch (habit.frequency) {
      case "daily":
        return true;
      case "weekly":
        return daysDiff % 7 === 0;
      case "custom":
        const interval = habit.interval;
        if (!interval) return false; 
        return daysDiff % interval === 0;
      default:
        return true;
    }
  };