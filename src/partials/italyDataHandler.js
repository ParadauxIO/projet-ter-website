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

    // if (data) console.log(returnObj);
    // if (error) console.error(error);

    return rows;
}

const safeSpread = (obj) => {
    return (obj ? JSON.parse(JSON.stringify(obj[0])) : {});
}