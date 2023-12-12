import React from "react"

interface Props {
    patient: Patient
}

const PatientDetail = ({ patient }: Props): JSX.Element => (
    <div className="detailContainer">
        <table>
            <tr>
                <td className="label">Name</td>
                <td>{patient.name}</td>
            </tr>
            <tr>
                <td className="label">Gender</td>
                <td>{patient.gender}</td>
            </tr>
            <tr>
                <td className="label">Birth date</td>
                <td>{patient.birthDate}</td>
            </tr>
            <tr>
                <td className="label">Birth location</td>
                <td>{patient.birthLocation}</td>
            </tr>
            <tr>
                <td className="label">Address</td>
                <td>{patient.address}</td>
            </tr>
            <tr>
                <td className="label">Phone</td>
                <td>{patient.phone}</td>
            </tr>
        </table>
    </div>
)

export default PatientDetail
