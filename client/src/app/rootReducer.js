import { authApi } from "@/features/api/authApi";
import authReducer from "../features/authSlice";
import {combineReducers} from "@reduxjs/toolkit";
import { courseApi } from "@/features/api/courseApi";

const rootReducer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer, // middleware mei bhi add kro store.js
    auth:authReducer
})

export default rootReducer;