import "./Sidebar.scss"

export default function Sidebar() {
    return (
        <aside className="sidenav">
            <div className="header-side">
                <h1>Projet D'Integration</h1>
                <p>Web Interface v1.0</p>
            </div>

            <div className="links">
                <a href="/" className="link active"> Home </a>
                <a href="/all" className="link"> All data </a>
                <a href="/coordinates" className="link"> Coordinate Table </a>
                More to come!
            </div>
        </aside>
    )
}