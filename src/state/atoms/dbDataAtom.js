import { atom, selector } from "recoil";

const coordinateColumns = ["name", "coordinates_ge_osm", "s_centre", "coordinates_polygon_ge", "coordinates_centre_georectified", "archives_list", "archives_list_text"];
const aclsAtlasColumns = [];
const aclsMapColumns = [];
const caAtlasColumns = [];
const harvardLongListColumns = [];
const lpmColumns = [];
const sampleRootColumns = [];
const zoneColumns = [];

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
        coordinateColumns.includes(item.accessor)
      )
    },
});

export const dbAclsAtlasColumnsState = selector({
  key: "dbAclsAtlasColumnsState",
  get: ({get}) => {
    return get(dbColumnsState).filter(item =>
      aclsAtlasColumns.includes(item.accessor)
    )
  }
});

export const dbAclsMapColumnsState = selector({
  key: "dbAclsMapColumnsState",
  get: ({get}) => {
    return get(dbColumnsState).filter(item =>
      aclsMapColumns.includes(item.accessor)
    )
  }
});

export const dbCaAtlasColumnsState = selector({
  key: "dbCaAtlasColumnsState",
  get: ({get}) => {
    return get(dbColumnsState).filter(item =>
      caAtlasColumns.includes(item.accessor)
    )
  }
});

export const dbHarvardLongListColumnsState = selector({
  key: "dbHarvardLongListColumnsState",
  get: ({get}) => {
    return get(dbColumnsState).filter(item =>
      harvardLongListColumns.includes(item.accessor)
    )
  }
});

export const dbLpmColumnsState = selector({
  key: "dbLpmColumnsState",
  get: ({get}) => {
    return get(dbColumnsState).filter(item =>
      lpmColumns.includes(item.accessor)
    )
  }
});

export const dbSampleRootColumnsState = selector({
  key: "dbSampleRootColumnsState",
  get: ({get}) => {
    return get(dbColumnsState).filter(item =>
      sampleRootColumns.includes(item.accessor)
    )
  }
});

export const dbZoneColumnsState = selector({
  key: "dbZoneColumnsState",
  get: ({get}) => {
    return get(dbColumnsState).filter(item =>
      zoneColumns.includes(item.accessor)
    )
  }
});