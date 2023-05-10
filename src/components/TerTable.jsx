import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

import "./TerTable.scss"
import { useRecoilValue } from 'recoil';
import useDbData from '../state/hooks/useDbData';

export default function TerTable({state}) {
    let {data, columns} = useRecoilValue(state);
    let {getColumnName} = useDbData();

    let columnObjs = columns.map((c) => {
      let columnName = {...getColumnName(c)};
      
      if (columnName == null) {
        return {field: c, headerName: c}
      }

      columnName.headerName = columnName.headername;
      return columnName;
    })

    return (
        <div className="ag-theme-alpine ter-table">
        <AgGridReact
          columnDefs={columnObjs}
          rowData={data}
        />
      </div>
    )
}
