import React, { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLElement> {}

const BasePage = ({ children }: Props): JSX.Element => (
    <main className="tw-p-10">{children}</main>
)

export default BasePage
