import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: string;
    avatar: string;
    birthDate: string;
    email: string;

}

const initialState: UserState = {
    name: 'Anna',
    avatar: 'https://doctor-veterinar.ru/images/mini-pig.png',
    birthDate: '1996-09-10',
    email: 'iamanna@gmail.com',

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },

        updateUserAvatar: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload;
        },
        updateUserEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        updateUserBirthdate: (state, action: PayloadAction<string>) => {
            state.birthDate = action.payload;
        },
    },
});

export const { updateUserName, updateUserAvatar, updateUserEmail, updateUserBirthdate } = userSlice.actions;
export default userSlice.reducer;
