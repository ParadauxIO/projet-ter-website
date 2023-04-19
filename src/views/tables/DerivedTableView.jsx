import "../MainGrid.scss"
import { useTable } from "react-table";
import TerTable from "../../components/TerTable";
import useDbData from "../../state/hooks/useDbData";
import { useRecoilValue } from "recoil";

export default function DerivedTableView({columnsState, title, subtitle}) {
    const {rows} = useDbData();
    const columns = useRecoilValue(columnsState);

    const tableInstance = useTable({ columns: columns, data: rows })

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
                    <TerTable table={tableInstance}/>
                </div>
            </div>
        </main>
    )
}