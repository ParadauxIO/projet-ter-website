import { useEffect, useMemo, useState } from "react"
import Navbar from "../components/Navbar"
import "./Index.scss"
import { getMainTable } from "../partials/italyDataHandler"
import { useTable } from "react-table";

function MyTable({table}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
     
      } = table

    return (
         // apply the table props

   <table {...getTableProps()}>

   <thead>

     {// Loop over the header rows

     headerGroups.map(headerGroup => (

       // Apply the header row props

       <tr {...headerGroup.getHeaderGroupProps()}>

         {// Loop over the headers in each row

         headerGroup.headers.map(column => (

           // Apply the header cell props

           <th {...column.getHeaderProps()}>

             {// Render the header

             column.render('Header')}

           </th>

         ))}

       </tr>

     ))}

   </thead>

   {/* Apply the table body props */}

   <tbody {...getTableBodyProps()}>

     {// Loop over the table rows

     rows.map(row => {

       // Prepare the row for display

       prepareRow(row)

       return (

         // Apply the row props

         <tr {...row.getRowProps()}>

           {// Loop over the rows cells

           row.cells.map(cell => {

             // Apply the cell props

             return (

               <td {...cell.getCellProps()}>

                 {// Render the cell contents

                 cell.render('Cell')}

               </td>

             )

           })}

         </tr>

       )

     })}

   </tbody>

 </table>
    )
}

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
                <MyTable table={tableInstance}/>
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