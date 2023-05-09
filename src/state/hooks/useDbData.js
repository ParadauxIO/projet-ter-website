import { useEffect } from "react";
import { getColumnNames, getMainTable } from "../../partials/italyDataHandler"
import { dbItemsHandbookDataState, dbItemsHarvardListDataState, dbItemsLocationDataState, dbItemsMapDataState, dbItemsProtectedMonumentsDataState, dbItemsRootDataState, dbUiColumnNamesDataState } from "../atoms/dbDataAtom";
import { useRecoilState } from "recoil";

export default function useDbData() {
    const [dbItemsRootData, set] = useRecoilState(dbItemsRootDataState);
    const [dbItemsLocationData, setDbItemsLocationData] = useRecoilState(dbItemsLocationDataState);
    const [dbItemsHarvardListData, setDbItemsHarvardListData] = useRecoilState(dbItemsHarvardListDataState);
    const [dbItemsMapData, setDbItemsMapData] = useRecoilState(dbItemsMapDataState);
    const [dbItemsHandbookData, setDbItemsHandbookData] = useRecoilState(dbItemsHandbookDataState);
    const [dbItemsProtectedMonumentsData, setDbItemsProtectedMonumentsData] = useRecoilState(dbItemsProtectedMonumentsDataState);
    const [dbUiColumnNamesData, setUiColumnNamesData] = useRecoilState(dbUiColumnNamesDataState);

    const load = async () => {
        // Load from the db
        if (!(rows.length == 0 && columns.length == 0)) {
            return;
        }
    };

    useEffect(() => {
        load();
    }, []);

    return {
        dbItemsRootData, dbItemsLocationData, dbItemsHarvardListData, 
        dbItemsMapData, dbItemsHandbookData, dbItemsProtectedMonumentsData,
        dbUiColumnNamesData, load
    };
}