import React from "react"
import { createHashRouter } from "react-router-dom"

import BasePage from "./pages/app/BasePage"
import DetailPage from "./pages/patients/detail/DetailPage"
import LoginPage from "./pages/authentication/components/LoginPage"
import NotFoundPage from "./pages/notfound/notFoundPage"
import PatientsLandingPage from "./pages/patients/landing/PatientsLandingPage"
import ProtectedRoute from "./pages/app/ProtectedRoute"

export const router = createHashRouter([
    {
        path: "/login",
        element: (
            <BasePage hasContainer={false}>
                <LoginPage />
            </BasePage>
        ),
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <BasePage />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/",
                element: <PatientsLandingPage />,
            },
            {
                path: "/patients/:patientId",
                element: <DetailPage />,
            },
        ],
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
