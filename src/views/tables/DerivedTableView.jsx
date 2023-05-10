import "../MainGrid.scss"
import TerTable from "../../components/TerTable";

export default function DerivedTableView({state, title, subtitle}) {
    return (
        <main className="main home">
            <div className="table-content">
                <div className="table-header">
                    <h1>
                        {title}
                    </h1>
                    <p> 
                        {subtitle} 
                    </p>
                </div>
                <div className="my-table">
                    <TerTable state={state}/>
                </div>
            </div>
        </main>
    )
}