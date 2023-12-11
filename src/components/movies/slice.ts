import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../../api/api"

interface FetchMoviesResponse {
    movies: Movie[]
}

export const fetchMovies = createAsyncThunk("movies/fetchAll", async () => {
    const response = await Api.get<FetchMoviesResponse>("movies")
    return response.movies
})

export interface MovieState {
    movies: Movie[]
}

const initialState: MovieState = {
    movies: [],
}

export const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        })
        builder.addCase(fetchMovies.rejected, (state) => {
            state.movies = []
        })
    },
})

// Action creators are generated for each case reducer function
// export const {} = moviesSlice.actions

export default moviesSlice.reducer
