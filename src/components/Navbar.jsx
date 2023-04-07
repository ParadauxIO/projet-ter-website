import "./Navbar.scss"

export default function Navbar() {
    return (
        <nav className="desktop-nav">
            <span className="logo">Projet TER Website</span>
            <a href="/">Main Table</a>
            <a href="/coordinates">Coordinates</a>
        </nav>
    )
}