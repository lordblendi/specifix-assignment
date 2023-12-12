import React from "react"
import { createHashRouter } from "react-router-dom"

import BasePage from "./pages/app/BasePage"
import DetailPage from "./pages/patients/detail/DetailPage"
import LoginPage from "./pages/login/LoginPage"
import NotFoundPage from "./pages/notfound/notFoundPage"
import PatientsLandingPage from "./pages/patients/landing/PatientsLandingPage"

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
        path: "/patients/:patientId",
        element: (
            <BasePage>
                <DetailPage />
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
