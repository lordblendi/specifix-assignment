import React from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

import { RootState, useAppDispatch } from "../../store"
import { setUser } from "../../pages/authentication/slice"

export const Header = (): JSX.Element => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const user = useSelector((state: RootState) => state.auth.user)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const onScroll = (): void => {
        setIsScrolled(window.scrollY > 30)
    }

    const logout = (): void => {
        dispatch(setUser())
        navigate("/login")
    }

    return (
        <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
            <Link to="/">
                <img className="header__logo" src="assets/images/logo.png" />
            </Link>

            {!!user && (
                <nav>
                    <button
                        onClick={logout}
                        className="button button--transparent"
                        title="Sign out"
                    >
                        <span className="tw-px-2">{user.username}</span>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                </nav>
            )}
        </header>
    )
}

export default Header
