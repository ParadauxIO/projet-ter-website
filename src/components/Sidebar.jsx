import { Link } from "react-router-dom"
import "./Sidebar.scss"

function SidebarLink({active, href, label}) {
    return (
        <Link to={href} className={"link" + (active===href ? " active" : "")}>
            {label}
        </Link>
    )
}

export default function Sidebar({active}) {

    return (
        <aside className="sidenav">
            <div className="header-side">
                <h1>Projet D'Integration</h1>
                <p>Web Interface v1.0</p>
            </div>

            <div className="links">
                <SidebarLink active={active} href="/" label="Home"/>
                <SidebarLink active={active} href="/all" label="All Data"/>
                <SidebarLink active={active} href="/coordinates" label="Coordinates Data"/>
            </div>
        </aside>
    )
}