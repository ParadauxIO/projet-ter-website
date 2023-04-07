import { useEffect, useState } from "react"
import "./Home.scss"
import { getMainTable, getSelectedColumnNames } from "../partials/italyDataHandler"
import { useTable } from "react-table";
import TerTable from "../components/TerTable";

const desiredColumns = ["name", "coordinates_ge_osm", "s_centre", 
"coordinates_polygon_ge", "coordinates_centre_georectified", 
"archives_list", "archives_list_text"];

export default function CoordinatesView() {
    let [tableDataRaw, setTableDataRaw] = useState([]);
    let [columnData, setColumnData] = useState([]);

    const tableInstance = useTable({ columns: columnData, data: tableDataRaw })

    useEffect(() => {
        async function load() {
            let rawTableData = await getMainTable();
            let columns = await getSelectedColumnNames(desiredColumns);

            setTableDataRaw(rawTableData);
            setColumnData(columns);
        }

        load();
    }, [])

    return (
        <main className="main home">

            <div className="table-content">
                <div className="table-header">
                    <h1>
                        Coordinates Table
                    </h1>
                    <p> Work in progress, shows only tables with coordinate data </p>
                </div>
                <div className="my-table">
                    <TerTable table={tableInstance}/>
                </div>
            </div>
        </main>
    )
}