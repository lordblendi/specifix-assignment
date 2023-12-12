import React from "react"
import { createHashRouter } from "react-router-dom"

import BasePage from "./pages/app/BasePage"
import LoginPage from "./pages/login/LoginPage"
import PatientListPage from "./pages/patientlist/components/PatientListPage"

export const router = createHashRouter([
    {
        path: "/",
        element: (
            <BasePage hasContainer={false}>
                <LoginPage />
            </BasePage>
        ),
    },
    {
        path: "/users",
        element: (
            <BasePage>
                <PatientListPage />
            </BasePage>
        ),
    },
])

export default router
