import { createSlice } from '@reduxjs/toolkit';

const habitsSlice = createSlice({
    name: 'habits',
    initialState: { items: [] },
    reducers: {},
});

export default habitsSlice.reducer;
