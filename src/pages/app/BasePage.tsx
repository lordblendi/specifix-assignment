import React, { HTMLAttributes } from "react"

import Header from "../../components/header/Header"
import PatientList from "../../components/patients/components/PatientList"

interface Props extends HTMLAttributes<HTMLElement> {
    hasContainer?: boolean
}

const BasePage = ({ children, hasContainer = true }: Props): JSX.Element => (
    <>
        <Header />
        <main>
            {hasContainer ? (
                <div className="container">
                    <PatientList />
                    <div>{children}</div>
                </div>
            ) : (
                <>{children}</>
            )}
        </main>
    </>
)

export default BasePage
