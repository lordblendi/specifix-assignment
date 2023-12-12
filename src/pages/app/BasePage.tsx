import React, { HTMLAttributes } from "react"

import Header from "../../components/header/Header"

interface Props extends HTMLAttributes<HTMLElement> {}

const BasePage = ({ children }: Props): JSX.Element => (
    <>
        <Header />
        <main>{children}</main>
    </>
)

export default BasePage
