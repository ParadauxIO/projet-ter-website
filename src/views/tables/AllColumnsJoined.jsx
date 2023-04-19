import "../Home.scss"
import { useTable } from "react-table";
import TerTable from "../../components/TerTable";
import useDbData from "../../state/hooks/useDbData";

export default function AllColumnsJoined() {
    const {columns, rows} = useDbData();

    const tableInstance = useTable({ columns: columns, data: rows })

    return (
        <main className="main home">
        <div className="table-content">
            <div className="table-header">
            <h1>
                All Data
            </h1>
            <p>
                Contains all tables joined together. Not easy to read.
            </p>
            </div>
            <div className="my-table">
                <TerTable table={tableInstance}/>
            </div>
        </div>
    </main>
    )
}