import { createSlice,  type PayloadAction } from '@reduxjs/toolkit';
import { mockHabits } from '../mocks/habits';

interface Habit {
    id: string;
    name: string; 
    completed: boolean;
    completedDates: string[];
    createdAt: string;   
    startDate: string;
}

interface HabitsState {
    items: Habit[];
}

const initialState: HabitsState = {
    items: mockHabits,
}

const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<Habit>) => {
            state.items.unshift(action.payload);
        },
        deleteHabit: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(h => h.id !== action.payload);
        },
        editHabit: (state, action: PayloadAction<{id: string; name: string}>) => {
            const habit = state.items.find(h => h.id === action.payload.id);
            if (habit) habit.name = action.payload.name;
        },
        toggleHabitDate: (state, action: PayloadAction<{id: string, date: string}>) => {
            const habit = state.items.find (h => h.id === action.payload.id);
            if (habit) {
                const index = habit.completedDates.indexOf(action.payload.date)
                if (index === -1) {
                    habit.completedDates.push(action.payload.date)
                } else {
                    habit.completedDates.splice(index, 1);
                }
            }
        }
    },
});

export const {addHabit, deleteHabit, editHabit, toggleHabitDate} = habitsSlice.actions; 
export default habitsSlice.reducer;
