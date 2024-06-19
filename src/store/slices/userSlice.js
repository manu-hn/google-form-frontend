import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: [],
    isLoading: false,
    isAuthenticated: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUserInitiated: (state) => {
            state.isLoading = true;
            state.isAuthenticated = false;
        },
        loginUserSuccessful: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.userInfo = action.payload;
        },
        loginUserFailure: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.userInfo = action.payload;
        },

        logoutUser: (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.userInfo = null;
        }
    }
});



export const { loginUserFailure, loginUserInitiated, loginUserSuccessful, logoutUser } = userSlice.actions;
export default userSlice.reducer;