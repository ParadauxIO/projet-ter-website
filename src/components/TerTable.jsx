import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

import "./TerTable.scss"
import { useRecoilValue } from 'recoil';
import useDbData from '../state/hooks/useDbData';

export default function TerTable({state}) {
    let {data, columns} = useRecoilValue(state);
    console.log(columns);
    let {getColumnName} = useDbData();
    
    let columnObjs = columns.map((c) => ({
        field: c,
        headerName: c,
        sortable: true,
        editable: true
    }))

    return (
        <div className="ag-theme-alpine ter-table">
        <AgGridReact
          columnDefs={columnObjs}
          rowData={data}
          style={{ height: 400, width: 600 }}
        />
      </div>
    )
}
