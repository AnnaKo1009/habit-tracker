import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { name: '', avatar: '' },
    reducers: {},
});

export default userSlice.reducer;
