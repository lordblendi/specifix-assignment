import React from "react"
import { useNavigate } from "react-router-dom"

export const LoginPage = (): JSX.Element => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const navigate = useNavigate()

    const onChangeUsername = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setUsername(event.target.value)
        },
        [],
    )

    const onChangePassword = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setPassword(event.target.value)
        },
        [],
    )

    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (username === "sadmin") {
            navigate("/")
        }
    }

    return (
        <div className="tw-mx-auto tw-my-10 tw-w-1/3">
            <div className="loginBox">
                <h1>Login</h1>

                <form
                    className="tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-y-4 tw-my-2"
                    onSubmit={onSubmit}
                >
                    <input
                        autoFocus
                        onChange={onChangeUsername}
                        placeholder="Username or email address"
                        value={username}
                    />

                    <input
                        onChange={onChangePassword}
                        placeholder="password"
                        type="password"
                        value={password}
                    />

                    <button type="submit" className="button">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
