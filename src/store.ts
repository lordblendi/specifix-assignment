import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "./components/counter/slice"
import movieReducer from "./components/movies/slice"
import { useDispatch } from "react-redux"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        movies: movieReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch<AppDispatch>
