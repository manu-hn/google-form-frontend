import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "@/store/slices/userSlice.js";

const appStore = configureStore({
    reducer: {
        user: UserSliceReducer
    }
});


export default appStore;