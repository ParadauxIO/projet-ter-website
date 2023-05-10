import { Link } from "react-router-dom"
import "./Sidebar.scss"
import { tableRoutes } from "../main"

function SidebarLink({active, href, label, isSubLink}) {
    return (
        <Link to={href} className={"link" + (active===href ? " active" : "") + (isSubLink ? " sublink" : "")}>
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
                <SidebarLink active={active} href="/assistant" label="AI Assistant"/>
                <SidebarLink active={active} href="/maps" label="Maps"/>
                <SidebarLink active={active} href="/add" label="Add data"/>
                <div className="sidebar-label">
                    Tables
                </div>
                <div className="tables-sublist">
                    {tableRoutes.map(tableRoute => (
                        <SidebarLink
                            key={tableRoute.path}
                            active={active}
                            href={"/table/" + tableRoute.path}
                            label={tableRoute.title}
                            isSubLink={true}
                        />
                    ))}
                </div>
            </div>
        </aside>
    )
}