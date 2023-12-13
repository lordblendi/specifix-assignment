import React from "react"
import { Link, NavLink } from "react-router-dom"

interface Props {
    showNavbar?: boolean
}

export const Header = ({ showNavbar = true }: Props): JSX.Element => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const onScroll = (): void => {
        setIsScrolled(window.scrollY > 30)
    }

    return (
        <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
            <Link to="/">
                <img className="header__logo" src="assets/images/logo.png" />
            </Link>

            {showNavbar && (
                <nav>
                    <NavLink to="/">Patients</NavLink>
                </nav>
            )}
        </header>
    )
}

export default Header
