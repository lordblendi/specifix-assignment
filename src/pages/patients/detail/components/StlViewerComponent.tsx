import React from "react"
import { StlViewer } from "react-stl-viewer"

interface Props {
    patient: Patient
}

const StlViewerComponent = ({ patient }: Props): JSX.Element => {
    const url = `assets/stl/${patient.stlFile}`

    return <StlViewer shadows={true} orbitControls={true} url={url} />
}

export default StlViewerComponent
