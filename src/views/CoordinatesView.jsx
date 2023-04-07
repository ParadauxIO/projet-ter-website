import { useEffect, useState } from "react"
import "./Home.scss"
import { getMainTable } from "../partials/italyDataHandler"
import { useTable } from "react-table";
import TerTable from "../components/TerTable";

export default function CoordinatesView() {
    let [tableDataRaw, setTableDataRaw] = useState([]);
    let [columnData, setColumnData] = useState([]);

    const tableInstance = useTable({ columns: columnData, data: tableDataRaw })

    useEffect(() => {
        async function load() {
            let rawTableData = await getMainTable();
            setTableDataRaw(rawTableData);

            let columns = [
                {
                Header: "Name",
                accessor: "name"
                }, {
                    Header: "coordinates_ge_osm",
                    accessor: "coordinates_ge_osm"
                },{
                    Header: "s_centre",
                    accessor: "s_centre"
                },{
                    Header: "coordinates_polygon_ge",
                    accessor: "coordinates_polygon_ge"
                },{
                    Header: "coordinates_centre_georectified",
                    accessor: "coordinates_polygon_georectified"
                },{
                    Header: "archives_list",
                    accessor: "archives_list"
                },{
                    Header: "archives_list_text",
                    accessor: "archives_list_text"
                },
            ];
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
                        Coordinates Table
                    </h1>
                    <p> Work in progress, shows only tables with coordinate data </p>
                </div>
                <h1 className="">
                    
                </h1>
                <div className="my-table">
                    <TerTable table={tableInstance}/>
                </div>
            </div>
        </main>
    )
}

let doesContainNestedKeyValue = (array, key, value) => {
    for (let v of array) {
        if (v[key] && v[key] == value) return true;
    }

    return false;
}