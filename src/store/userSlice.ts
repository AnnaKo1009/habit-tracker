import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id?: string;
    name: string;
    avatar: string | null;
    birthDate: string;
    email: string;
    password?: string,

}

const initialState: UserState = {
    id: '',
    name: '',
    avatar: null,
    birthDate: '',
    email: '',
    password: '',

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{
            id: string;
            name: string,
            email: string,
            avatar?: string | null,
            birthDate: string;
        }>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar ?? null;
            state.birthDate = action.payload.birthDate ?? '';

        },

        logoutUser: (state) => {
            state.id = '';
            state.name = '';
            state.email = '';
            state.avatar = null;
            state.birthDate = '';
            state.password = '';
        },

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
        updateUserPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const { updateUserName, updateUserAvatar, updateUserEmail, updateUserBirthdate, updateUserPassword } = userSlice.actions;
export const {setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
