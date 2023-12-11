import React from "react"
import { createHashRouter } from "react-router-dom"

import LandingPage from "./pages/landing/LandingPage"
import LoginPage from "./pages/login/LoginPage"
import BasePage from "./pages/app/BasePage"

export const router = createHashRouter([
    {
        path: "/",
        element: (
            <BasePage>
                <LoginPage />
            </BasePage>
        ),
    },
    {
        path: "/users",
        element: (
            <BasePage>
                <LandingPage />
            </BasePage>
        ),
    },
])

export default router
