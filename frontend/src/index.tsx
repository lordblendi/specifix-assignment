import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import { store } from "./store"

import "./style/index.scss"

import router from "./router"

const rootElement = document.getElementById("root")

if (!!rootElement) {
    const root = createRoot(rootElement)
    root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>,
    )
}
