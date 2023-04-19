
import "./Index.scss"

import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Index() {
    const location = useLocation();

    return (
        <div className="grid-container">
            <header className="header"></header>
            <Sidebar active={location.pathname}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

