import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockHabits } from "../mocks/habits";
import type { Habit } from '../api/habitsApi';

interface HabitsState {
  items: Habit[];
}

const initialState: HabitsState = {
  items: mockHabits,
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.items.unshift(action.payload);
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((h) => h.id !== action.payload);
    },
    editHabit: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        startDate: string;
        frequency: "daily" | "weekly" | "custom";
        interval?: number;
      }>,
    ) => {
      const habit = state.items.find((h) => h.id === action.payload.id);
      if (habit) {
        habit.name = action.payload.name;
        habit.startDate = action.payload.startDate;
        habit.frequency = action.payload.frequency;
        habit.interval = action.payload.interval;
      }
    },
    toggleHabitDate: (
      state,
      action: PayloadAction<{ id: string; date: string }>,
    ) => {
      const habit = state.items.find((h) => h.id === action.payload.id);
      if (habit) {
        const existingLogHabit = habit.logs.findIndex((log) => log.date === action.payload.date );

        if(existingLogHabit === -1) {
          habit.logs.push({
            date: action.payload.date,
            completed: true,
          });
        } else {
          habit.logs.splice(existingLogHabit, 1);
        }
      }
    },
  },
});

export const { addHabit, deleteHabit, editHabit, toggleHabitDate } =
  habitsSlice.actions;
export default habitsSlice.reducer;
