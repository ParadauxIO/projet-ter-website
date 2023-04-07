
import "./Index.scss"

import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Index() {


    return (
        <div className="grid-container">
            <header className="header"></header>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

