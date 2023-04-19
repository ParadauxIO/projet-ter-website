import { useEffect } from "react";
import { getColumnNames, getMainTable } from "../../partials/italyDataHandler"
import { dbColumnsState, dbRowsState } from "../atoms/dbDataAtom";
import { useRecoilState } from "recoil";

export default function useDbData() {
    const [rows, setRows] = useRecoilState(dbRowsState);
    const [columns, setColumns] = useRecoilState(dbColumnsState);

    const load = async () => {
        // Load from the db
        if (!(rows.length == 0 && columns.length == 0)) {
            return;
        }

        setRows(await getMainTable());
        setColumns(await getColumnNames());
    };

    useEffect(() => {
        load();
    }, []);

    return {
        rows,
        columns,
        load
    };
}