import "./Navbar.scss"

export default function Navbar() {
    return (
        <nav className="desktop-nav">
            <span className="logo">Projet TER Website</span>
            <div className="nav-links">
                <a href="/">Main Table</a>
                <a href="/coordinates">Coordinates</a>
            </div>
        </nav>
    )
}