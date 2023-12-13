import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import patientReducer from "./components/patients/slice"
import authReducer from "./pages/authentication/slice"

export const store = configureStore({
    reducer: {
        patients: patientReducer,
        auth: authReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch<AppDispatch>
