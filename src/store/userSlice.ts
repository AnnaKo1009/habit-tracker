import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    name: string;
    avatar: string;
}

const initialState: UserState = {
    name: 'Anna',
    avatar: 'https://doctor-veterinar.ru/images/mini-pig.png'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action ) => {
            state.name = action.payload.name;
            state.avatar = action.payload.avatar;
        },
    },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
