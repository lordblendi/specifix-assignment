import React from "react"
import { createHashRouter } from "react-router-dom"

import App from "./pages/app/App"
import HelloWorld from "./pages/helloworld/HelloWorld"

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/hello",
        element: <HelloWorld />,
    },
])

export default router
