import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../../api/api"

interface FetchPatientsResponse {
    patients: Patient[]
}

export const fetchPatients = createAsyncThunk("patients/fetchAll", async () => {
    const response = await Api.get<FetchPatientsResponse>("patients")
    return response.patients
})

export interface PatientState {
    patients: Patient[]
    filter: string
    pageSize: number
    currentPage: number
}

const initialState: PatientState = {
    patients: [],
    filter: "",
    pageSize: 10,
    currentPage: 0,
}

export const patientsSlice = createSlice({
    name: "patientsSlice",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchPatients.fulfilled, (state, action) => {
            state.patients = action.payload
        })
        builder.addCase(fetchPatients.rejected, (state) => {
            state.patients = []
        })
    },
})

// Action creators are generated for each case reducer function
export const { setFilter, setCurrentPage } = patientsSlice.actions

export default patientsSlice.reducer
