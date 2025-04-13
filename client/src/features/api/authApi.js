// integrate krenge yha auth api ko , RTK query
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";

// const USER_API = "http://localhost:8080/api/v1/user/"
const USER_API = "https://nextgenlearn.onrender.com/api/v1/user/";

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include'
    }),
    endpoints: (builder) => ({
        // for register use mutation for POST data
        registerUser: builder.mutation({
            query: (inputData) => ({
                url:"register",
                method:"POST",
                body:inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url:"login",
                method:"POST",
                body:inputData
            }),
            async onQueryStarted(_, {queryFulfilled, dispatch}){
                try{
                    const result = await queryFulfilled;
                    console.log(result.token);
                    
                    localStorage.setItem("User_token",result.token)
                    //console.log(result)
                    dispatch(userLoggedIn({user:result.data.user}))
                }
                catch(error){
                    console.log(error)
                }
            }
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url:"logout",
                method:"GET"
            }),
            async onQueryStarted(_, {queryFulfilled, dispatch}){
                try{
                    dispatch(userLoggedOut());
                }
                catch(error){
                    console.log(error)
                }
            }
        }),
        loadUser: builder.query({  // To get use query
            query: () => ({
                url:"profile",
                method:"GET"
            }),
            
            async onQueryStarted(_, {queryFulfilled, dispatch}){ // refresh krne ke bad bhi login ko hi dispatch krna h mtlb login hi rhe. user null n ho
                try{
                    const result = await queryFulfilled;
                    // console.log(result)
                    dispatch(userLoggedIn({user:result.data.user}))
                }
                catch(error){
                    console.log(error)
                }
            }
        }),
        updateUser: builder.mutation({
            query: (formData) => ({
                url:"profile/update",
                method:"PUT",
                body:formData,
                credentials:"include"
            })
        })
    })
});

export const {useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation,useLoadUserQuery,useUpdateUserMutation} = authApi;