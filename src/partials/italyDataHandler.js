import { supabase } from "../state/supabase";

export const getMainTable = async () => {
    const {data, error} = await supabase.from("italy_sample_root").select(`
        *, 
        italy_sample_coordinates (*),
        italy_harvard_long_list (*),
        italy_acls_map_data (*),
        italy_acls_atlas_data (*),
        italy_ca_atlas (*),
        italy_lpm_data (*),
        italy_zone (*)
    `);

    let rows = [];
    for (let row of data) {
        let rowDataRaw = {...row, 
            ...safeSpread(row.italy_sample_coordinates),
            ...safeSpread(row.italy_harvard_long_list),
            ...safeSpread(row.italy_acls_map_data),
            ...safeSpread(row.italy_acls_atlas_data),
            ...safeSpread(row.italy_ca_atlas),
            ...safeSpread(row.italy_lpm_data),
            ...safeSpread(row.italy_zone),
        };

        delete rowDataRaw.italy_sample_coordinates;
        delete rowDataRaw.italy_harvard_long_list;
        delete rowDataRaw.italy_acls_map_data;
        delete rowDataRaw.italy_acls_atlas_data;
        delete rowDataRaw.italy_ca_atlas;
        delete rowDataRaw.italy_lpm_data;
        delete rowDataRaw.italy_zone;

        rows.push(rowDataRaw);
    }

    //if (rows) console.log(rows);
    if (error) console.error(error);

    return rows;
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