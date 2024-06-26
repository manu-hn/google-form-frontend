import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: [],
    isLoading: false,
    isAuthenticated: false,
    isFresher: false,
    isFormSubmitted: false,
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
        },
        arYouFresher: (state, action) => {
            if (action.payload === 'YES') {
                state.isFresher = true;
            } else {
                state.isFresher = false;
            }
        },
        formSubmissionStarted: (state) => {
            state.isFormSubmitted = true;
        },
        formSubmissionSuccess: (state) => {
            state.isFormSubmitted = false;
        },
        formSubmissionFailure: (state) => {
            state.isFormSubmitted = false;
        },
    }
});



export const { loginUserFailure, loginUserInitiated, loginUserSuccessful, logoutUser,
    arYouFresher,
    formSubmissionFailure, formSubmissionStarted, formSubmissionSuccess } = userSlice.actions;
export default userSlice.reducer;