import React from "react"
import { StlViewer } from "react-stl-viewer"

interface Props {
    patient: Patient
}

const StlViewerComponent = ({ patient }: Props): JSX.Element => {
    const url = `assets/stl/${patient.stlFile}`
    const style = {
        height: "100%",
        width: "100%",
    }

    return (
        <>
            <div className="stlContainer">
                <StlViewer style={style} url={url} orbitControls={true} />
            </div>
            <p className="tw-italic">Use your mouse to rotate and zoom.</p>
        </>
    )
}

export default StlViewerComponent
