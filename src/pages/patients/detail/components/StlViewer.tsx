import React from "react"

interface Props {
    patient: Patient
}

const StlViewer = ({ patient }: Props): JSX.Element => (
    <div className="stlContainer">{patient.stlFile}</div>
)

export default StlViewer
