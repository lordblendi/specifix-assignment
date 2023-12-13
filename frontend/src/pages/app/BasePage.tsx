import React, { HTMLAttributes } from "react"
import { Outlet } from "react-router-dom"

import Header from "../../components/header/Header"
import PatientList from "../../components/patients/components/PatientList"

interface Props extends HTMLAttributes<HTMLElement> {
    hasContainer?: boolean
    hasSidebar?: boolean
}

const BasePage = ({
    children,
    hasContainer = true,
    hasSidebar = true,
}: Props): JSX.Element => (
    <>
        <Header />
        <main>
            {hasContainer ? (
                <div className="container">
                    {hasSidebar && <PatientList />}
                    <div className="content">
                        {children}
                        <Outlet />
                    </div>
                </div>
            ) : (
                <>
                    {children}
                    <Outlet />
                </>
            )}
        </main>
    </>
)

export default BasePage
