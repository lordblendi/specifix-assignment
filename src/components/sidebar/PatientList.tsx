import React from "react"
import { useSelector } from "react-redux"

import { useAppDispatch, type RootState } from "../../store"
import { fetchPatients } from "../patients/slice"

const PatientList = (): JSX.Element => {
    const patients = useSelector((state: RootState) => state.patients.patients)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(fetchPatients())
    }, [])

    console.log(patients)
    return (
        <div>
            <div>Patients: {patients.length}</div>
            <div className="tw-flex tw-w-full">
                {patients.length > 0 && (
                    <ul>
                        {patients.map(
                            (patient, index): JSX.Element => (
                                <li key={index}>
                                    {patient.name} ({patient.birthDate})
                                </li>
                            ),
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default PatientList
