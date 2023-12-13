import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "../../../store"

import { getPatiendById } from "../../../components/patients/selectors"
import PatientDetail from "./components/PatientDetail"
import StlViewerComponent from "./components/StlViewerComponent"
import PatientNotFound from "./components/PatientNotFound"

export const DetailPage = (): JSX.Element => {
    const { patientId } = useParams()
    const patientsState = useSelector((state: RootState) => state.patients)

    if (!patientId) {
        return <PatientNotFound patientId={""} />
    }

    const patient = getPatiendById(patientsState, patientId)

    if (!patient) {
        return <PatientNotFound patientId={patientId} />
    }

    return (
        <>
            <PatientDetail patient={patient} />
            <StlViewerComponent patient={patient} />
        </>
    )
}

export default DetailPage
