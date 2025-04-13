// api ko frontend ke sath integrate
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import { authApi } from '@/features/api/authApi';
import { courseApi } from '@/features/api/courseApi';
import { purchaseApi } from '@/features/api/purchaseApi';
import { courseProgressApi } from '@/features/api/courseProgressApi';
import { contactApi } from '@/features/api/contactApi';

export const appStore = configureStore({
    reducer: rootReducer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware, courseApi.middleware, purchaseApi.middleware, courseProgressApi.middleware, contactApi.middleware)
});

const initializeApp = async () => {
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();