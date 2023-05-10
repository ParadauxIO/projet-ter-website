import { supabase } from "../state/supabase";

export const getData = async (table) => {
    let {data, error} = await supabase.from(table).select();
    if (error) console.error(error);
    return data;
}

export const getColumnNames = async () => {
    let {data, error} = await supabase.from("ui_column_names").select();
    let columns = data.map((row) => ({Header: row.header, accessor: row.accessor}));
    
    if (error) console.error(error);
    return columns;
}

export const getSelectedColumnNames = async (desiredColumns) => {
    let columns = await getColumnNames();
    console.log(columns.filter(item => desiredColumns.includes(item)))
    return columns.filter(item => {
        for (let column of desiredColumns) {
            if (item.accessor === column) return true;
        }
        return false;
    });
}

const safeSpread = (obj) => {
    return (obj ? JSON.parse(JSON.stringify(obj[0])) : {});
}