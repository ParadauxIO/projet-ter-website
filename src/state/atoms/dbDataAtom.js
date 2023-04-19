import { atom, selector } from "recoil";

const sampleRootColumns = ["name", "alt_name_1", "alt_name", "town", "country", "region", "province", "notes", "period", "period_2", "associated_with", "damaged_bibliography", "known_damage", "photograph_links"];
const coordinateColumns = ["name", "coordinates_ge_osm", "s_centre", "coordinates_polygon_ge", "coordinates_centre_georectified", "archives_list", "archives_list_text"];
const harvardLongListColumns = ["name", "harvard_long_list", "harvard_long_list_stars", "harvard_long_list_text", "harvard_short_list", "harvard_short_list_text"];
const aclsMapColumns = ["name", "acls_map_name", "acls_map_type", "acls_map_stars", "acls_map_grid_reference", "acls_map_address", "acls_map_text", "acls_map_image_links", "acs_map_image_links"];
const aclsAtlasColumns = ["name", "acls_atlas_title", "acls_atlas_type", "acls_atlas_stars", "acls_atlas_grid_reference", "acls_atlas_address"];
const caAtlasColumns = ["name", "ca_atlas_text", "ca_handbook", "ca_handbook_type", "ca_handbook_stars", "ca_handbook_address", "ca_handbook_text"];

const lpmColumns = ["name", "lpm_vol", "lpm_stars", "lpm_military_grid", "lpm_text"];
const zoneColumns = ["name", "zone_handbook_vol", "zone_handbook_aux_list", "zone_hb_text"];

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