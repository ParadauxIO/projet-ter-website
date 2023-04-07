import "./Sidebar.scss"

export default function Sidebar() {
    return (
        <aside className="sidenav">
            <div className="header-side">
                <h1>Projet D'Integration</h1>
                <p>Web Interface v1.0</p>
            </div>

            <div className="links">
                <a className="link active"> Home </a>
                <a className="link"> Coordinate Table </a>
                More to come!
            </div>
        </aside>
    )
}