import React from "react"

export const PatientsLandingPage = (): JSX.Element => (
    <div className="tw-px-4 tw-py-8">
        <h1>Welcome to the Specifix platform!</h1>
        <div className="tw-py-8">
            <p>
                Please choose a patient from the sidebar to view their details.
            </p>
            <p>You can filter the list using the search bar.</p>
            <p>By default 10 patients will be shown.</p>
        </div>
    </div>
)

export default PatientsLandingPage
