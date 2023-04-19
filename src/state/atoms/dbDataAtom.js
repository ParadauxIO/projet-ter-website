import { atom, selector } from "recoil";

export const dbColumnsState = atom({
    key: "dbColumnsState",
    default: [],
});

export const dbRowsState = atom({
    key: "dbRowsState",
    default: [],
});

export const dbCoordinateColumnsState = selector({
    key: 'dbCoordinateColumnsState',
    get: ({get}) => {
      return get(dbColumnsState).filter(item =>
        ["name", "coordinates_ge_osm", "s_centre", "coordinates_polygon_ge", "coordinates_centre_georectified", "archives_list", "archives_list_text"].includes(item.accessor)
      )
    },
  });