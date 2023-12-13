import React from "react"

interface Props {
    patientId: string
}

const PatientNotFound = ({ patientId }: Props): JSX.Element => (
    <div className="tw-p-8">
        <h1>Patient not found</h1>
        <div className="tw-py-8">
            <p>
                The patient with id &apos;{patientId} &apos; for does not exist.
            </p>
        </div>
    </div>
)

export default PatientNotFound
