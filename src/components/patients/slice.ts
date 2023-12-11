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
}

const initialState: PatientState = {
    patients: [],
}

export const patientsSlice = createSlice({
    name: "patientsSlice",
    initialState,
    reducers: {},
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
// export const {} = patientsSlice.actions

export default patientsSlice.reducer
