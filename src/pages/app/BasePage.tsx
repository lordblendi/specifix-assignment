import React, { HTMLAttributes } from "react"
import { Outlet } from "react-router-dom"

import Header from "../../components/header/Header"
import PatientList from "../../components/patients/components/PatientList"

interface Props extends HTMLAttributes<HTMLElement> {
    hasContainer?: boolean
    hasSidebar?: boolean
    showNavbar?: boolean
}

const BasePage = ({
    children,
    hasContainer = true,
    hasSidebar = true,
    showNavbar = true,
}: Props): JSX.Element => (
    <>
        <Header showNavbar={showNavbar} />
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
