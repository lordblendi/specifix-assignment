import React from "react"
import { createHashRouter } from "react-router-dom"

import BasePage from "./pages/app/BasePage"
import LoginPage from "./pages/login/LoginPage"
import PatientsLandingPage from "./pages/patientslanding/PatientsLandingPage"
import NotFoundPage from "./pages/notfound/notFoundPage"

export const router = createHashRouter([
    {
        path: "/",
        element: (
            <BasePage hasContainer={false} showNavbar={false}>
                <LoginPage />
            </BasePage>
        ),
    },
    {
        path: "/patients",
        element: (
            <BasePage>
                <PatientsLandingPage />
            </BasePage>
        ),
    },
    {
        path: "*",
        element: (
            <BasePage hasSidebar={false}>
                <NotFoundPage />
            </BasePage>
        ),
    },
])

export default router
