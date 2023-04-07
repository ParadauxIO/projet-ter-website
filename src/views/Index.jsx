import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import "./Index.scss"
import { getMainTable } from "../partials/italyDataHandler"
import { useTable } from "react-table";
import TerTable from "../components/TerTable";
import Footer from "../components/Footer";

export default function Index() {
    let [tableDataRaw, setTableDataRaw] = useState([]);
    let [columnData, setColumnData] = useState([]);

    const tableInstance = useTable({ columns: columnData, data: tableDataRaw })

    useEffect(() => {
        async function load() {
            let rawTableData = await getMainTable();
            setTableDataRaw(rawTableData);

            let columns = [];
            for (let row of rawTableData) {
                for (let key of Object.keys(row)) {
                    if (!doesContainNestedKeyValue(columns, 'Header', key)) {
                        columns.push({
                            Header: key,
                            accessor: key
                        })
                    }
                }
            }
            console.log(tableDataRaw)
            setColumnData(columns);
        }

        load();
    }, [])

    return (
        <main className="index">
            <Navbar/>
            <div className="table-content">
                <h1 className="table-header">
                    Main Table
                </h1>
                <div className="my-table">
                    <TerTable table={tableInstance}/>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

let doesContainNestedKeyValue = (array, key, value) => {
    for (let v of array) {
        if (v[key] && v[key] == value) return true;
    }

    return false;
}