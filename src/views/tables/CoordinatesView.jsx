import "../Home.scss"
import { useTable } from "react-table";
import TerTable from "../../components/TerTable";
import useDbData from "../../state/hooks/useDbData";
import { useRecoilValue } from "recoil";
import { dbCoordinateColumnsState } from "../../state/atoms/dbDataAtom";

export default function CoordinatesView() {
    const {rows} = useDbData();
    const coordinateColumns = useRecoilValue(dbCoordinateColumnsState);

    const tableInstance = useTable({ columns: coordinateColumns, data: rows })

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