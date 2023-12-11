import React from "react"

import Counter from "../../components/counter/components/Counter"
import { Link } from "react-router-dom"

export const App = (): JSX.Element => {
    return (
        <div>
            <h1 className="tw-bg-yellow-200">
                <Link to={"hello"}>Hello!!</Link>
            </h1>
            <h2>Welcome to your First React App..!</h2>
            <Counter />
        </div>
    )
}

export default App
