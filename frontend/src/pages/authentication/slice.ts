import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    user?: User
}

const initialState: AuthState = {}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | undefined>) => {
            state.user = action.payload
        },
    },
    extraReducers() {},
})

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions

export default authSlice.reducer
