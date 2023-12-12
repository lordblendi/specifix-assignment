import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "../../../store"

import { getPatiendById } from "../../../components/patients/selectors"

export const DetailPage = (): JSX.Element => {
    const { patientId } = useParams()
    const patientsState = useSelector((state: RootState) => state.patients)

    console.log(useParams())

    const patiendDoesNotExistElement: JSX.Element = (
        <div className="tw-p-8">
            <h1>Patient not found</h1>
            <div className="tw-py-8">
                <p>The page you are looking for does not exist.</p>
            </div>
        </div>
    )

    if (!patientId) {
        return patiendDoesNotExistElement
    }

    const patient = getPatiendById(patientsState, patientId)

    if (!patient) {
        return patiendDoesNotExistElement
    }

    console.log(patient)

    return <div>{patient.name}</div>
}

export default DetailPage
