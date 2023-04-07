
import "./Index.scss"

import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Index() {


    return (
        <div class="grid-container">
            <header class="header"></header>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

