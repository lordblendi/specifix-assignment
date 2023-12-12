import React from "react"

export const Header = (): JSX.Element => {
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
            <img className="header__logo" src="assets/images/logo.png" />
        </header>
    )
}

export default Header
