import { authApi } from "@/features/api/authApi";
import authReducer from "../features/authSlice";
import {combineReducers} from "@reduxjs/toolkit";
import { courseApi } from "@/features/api/courseApi";
import { purchaseApi } from "@/features/api/purchaseApi";
import { courseProgressApi } from "@/features/api/courseProgressApi";
import { contactApi } from "@/features/api/contactApi";

const rootReducer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer, // middleware mei bhi add kro store.js
    [purchaseApi.reducerPath]:purchaseApi.reducer,
    [courseProgressApi.reducerPath]:courseProgressApi.reducer,
    [contactApi.reducerPath]:contactApi.reducer,
    auth:authReducer
})

export default rootReducer;