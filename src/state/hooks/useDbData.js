import { useEffect } from "react";
import { dbItemsHandbookDataState, dbItemsHarvardListDataState, dbItemsLocationDataState, dbItemsMapDataState, dbItemsProtectedMonumentsDataState, dbItemsRootDataState, dbUiColumnNamesDataState } from "../atoms/dbDataAtom";
import { useRecoilState } from "recoil";
import { getData } from "../../partials/italyDataHandler";

export default function useDbData() {
    const [dbItemsRootData, setDbItemsRootData] = useRecoilState(dbItemsRootDataState);
    const [dbItemsLocationData, setDbItemsLocationData] = useRecoilState(dbItemsLocationDataState);
    const [dbItemsHarvardListData, setDbItemsHarvardListData] = useRecoilState(dbItemsHarvardListDataState);
    const [dbItemsMapData, setDbItemsMapData] = useRecoilState(dbItemsMapDataState);
    const [dbItemsHandbookData, setDbItemsHandbookData] = useRecoilState(dbItemsHandbookDataState);
    const [dbItemsProtectedMonumentsData, setDbItemsProtectedMonumentsData] = useRecoilState(dbItemsProtectedMonumentsDataState);
    const [dbUiColumnNamesData, setUiColumnNamesData] = useRecoilState(dbUiColumnNamesDataState);

    const load = async () => {
        // Load from the db
        if (isEmpty(dbItemsRootData)) {
            let data = await getData(dbItemsRootData.table);
            setDbItemsRootData((prev) => {
                return {
                    ...prev,
                    data
                }
            });
        }

        if (isEmpty(dbItemsLocationData)) {
            let data = await getData(dbItemsLocationData.table);
            setDbItemsLocationData((prev) => {
                return {
                    ...prev,
                    data
                }
            });
        }

        if (isEmpty(dbItemsHarvardListData)) {
            let data = await getData(dbItemsHarvardListData.table);
            setDbItemsHarvardListData((prev) => {
                return {
                    ...prev,
                    data
                }
            });
        }

        if (isEmpty(dbItemsMapData)) {
            let data = await getData(dbItemsMapData.table);
            setDbItemsMapData((prev) => {
                return {
                    ...prev,
                    data
                }
            });
        }

        if (isEmpty(dbItemsHandbookData)) {
            let data = await getData(dbItemsHandbookData.table);
            setDbItemsHandbookData((prev) => {
                return {
                    ...prev,
                    data
                }
            });
        }

        if (isEmpty(dbItemsProtectedMonumentsData)) {
            let data = await getData(dbItemsProtectedMonumentsData.table);
            setDbItemsProtectedMonumentsData((prev) => {
                return {
                    ...prev,
                    data
                }
            });
        } 

        if (isEmpty(dbUiColumnNamesData)) {
            let data = await getData(dbUiColumnNamesData.table);
            setDbItemsProtectedMonumentsData((prev) => {
                return {
                    ...prev,
                    data
                }
            });
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

const isEmpty = (state) => {
    return !state || !state.data || state.data.length === 0;
}