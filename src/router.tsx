import React from "react"
import { createHashRouter } from "react-router-dom"

import LandingPage from "./pages/landing/LandingPage"
import LoginPage from "./pages/login/LoginPage"

export const router = createHashRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/users",
        element: <LoginPage />,
    },
])

export default router
