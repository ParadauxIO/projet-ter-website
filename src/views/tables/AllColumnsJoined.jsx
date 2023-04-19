import "../Home.scss"
import { getColumnNames, getMainTable } from "../../partials/italyDataHandler"
import { useTable } from "react-table";
import TerTable from "../../components/TerTable";
import { useEffect, useState } from "react"

export default function AllColumnsJoined() {
    let [tableDataRaw, setTableDataRaw] = useState([]);
    let [columnData, setColumnData] = useState([]);

    const tableInstance = useTable({ columns: columnData, data: tableDataRaw })

    useEffect(() => {
        async function load() {
            let rawTableData = await getMainTable();
            setTableDataRaw(rawTableData);

            let columns = await getColumnNames();

            console.log(columns)
            console.log(tableDataRaw)
            setColumnData(columns);
        }

        load();
    }, [])

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