import "./MainGrid.scss"
import "./HomeDashboard.scss"
import useDbData from "../state/hooks/useDbData";

export default function Home() {
    let {rows} = useDbData();

    return (
        <main className="main">
            <div className="card hero">
                <p>
                    Welcome to the <span className="italics">Campania/Lazio Cultural Database Project</span> website.
                    Here you will be able to browse the database we have been building as well as 
                    have a central place to link various resources we have been working on alongside
                    it.
                </p>
            </div>
            <div className="home-dashboard">
                <div className="card">
                    <h1> Statistics </h1>
                    <span className="subtitle">Information at a glance.</span>
                    <div className="statistic">
                        <span className="key">Total Records</span>
                        <span className="value">{rows.length}</span>
                        <p>How many records we have scanned and put into the database.</p>
                    </div>

                    More statistics to come.
                </div>
                <div className="card">
                    <h1> Project Links </h1>
                    <p className="subtitle"> Various documents and resources we have compiled, as well as any notes, presentations, etc.</p>
                    <ul>
                        <li>
                            <a href="https://docs.google.com/document/d/1VVCIYdQhzSvZoKKhQY3_f-Uj07laFQXu-gNIvl1ufqU/edit?usp=sharing">Project Report</a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1BTOlx7QKSk7mODCksa4IJ2Xpm15UU3Ii4uqJREC7pH0/edit?usp=sharing">Review of Sample Database</a>
                        </li>
                        <li>
                            <a href="https://tcdud-my.sharepoint.com/:p:/r/personal/errityr_tcd_ie/Documents/Expos%C3%A9%20TER.pptx?d=w65d1c93878414af882fb8c9f7f3c5032&csf=1&web=1&e=sZASW6">Initial meeting presentation</a>
                        </li>
                        <li>
                            <a href="https://github.com/ParadauxIO/projet-ter-website">Website Source Code</a>
                        </li>
                    </ul>
                    <span className="footnote">
                        Due to restrictions placed on our Office 365 accounts you will have to request access to the slideshows if you do not already have access.
                    </span>
                </div>

                <div className="card">
                    <h1> Developer Contacts</h1>
                    <p className="subtitle">
                        Where / who to contact in case of questions.
                    </p>
                    <ul>
                        <li>
                            <a href="mailto:errityr@tcd.ie">Rían Errity</a>: Website/Database questions
                        </li>
                        <li>
                            <a href="mailto:NOLAND11@tcd.ie">Darragh Nolan</a>: Database Questions
                        </li>
                        <li>
                            <a href="mailto:LRABBITT@tcd.ie">Luke Rabbitte</a>: Database Questions
                        </li>
                    </ul>
                </div>
                
                <div className="card">
                    <h1>To Do</h1>
                    <ul>
                        <li>Have a preliminary meeting with the team at Swansea</li>
                        <li>Scan in and build up the database further from the resources provided</li>
                        <li>Refine the website further to have more options and better access to data</li>
                        <li>Build an AI assistant to whom you can ask questions about the data.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}