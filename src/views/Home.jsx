import { getColumnNames, getMainTable } from "../partials/italyDataHandler"
import { useTable } from "react-table";
import TerTable from "../components/TerTable";
import { useEffect, useState } from "react"
import "./Home.scss"

export default function Home() {
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
                    Main Table
                </h1>
                <p>
                    Contains all tables joined together.
                </p>
                </div>
                <div className="my-table">
                    <TerTable table={tableInstance}/>
                </div>
            </div>
        </main>
    );
}