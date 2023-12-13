import { createSelector } from "@reduxjs/toolkit"
import { PatientState } from "./slice"

export const getPatiendById = createSelector(
    [
        (_state: PatientState, id: string): string => id,
        (state: PatientState): Patient[] => state.patients,
    ],
    (id, patients) => patients.find((patient) => patient.id === id),
)

export const getFilteredPatients = createSelector(
    [
        (state: PatientState): string => state.filter,
        (state: PatientState): Patient[] => state.patients,
    ],
    (filter, patients) =>
        patients.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
        ),
)

export const getFilteredAndPaginatedPatients = createSelector(
    [
        (state: PatientState): Patient[] => getFilteredPatients(state),
        (state: PatientState): number => state.pageSize,
        (state: PatientState): number => state.currentPage,
    ],
    (filteredPatients, pageSize, currentPage) =>
        filteredPatients.slice(
            pageSize * currentPage,
            pageSize * (currentPage + 1),
        ),
)
