import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    authUsername: '',
    authUserEmail: '',
    metaMaskKey: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUsername(state, action: PayloadAction<string>) {
            state.authUsername = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.authUserEmail = action.payload;
        },
        setKey(state, action: PayloadAction<string>) {
            state.metaMaskKey = action.payload;
        }
    }
})

export default authSlice.reducer;
