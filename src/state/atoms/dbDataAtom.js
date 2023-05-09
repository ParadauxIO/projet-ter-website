import { atom, selector } from "recoil";

export const dbItemsRootDataState = atom({
  key: "dbItemsRootData",
  default: {
    data: [],
    table: "",
    columns: ["internal_id", "name", "alternative_names", "associated_with", "association_type", "damage", 
              "notes", "period", "photograph_links", "bibliography_damage"]
  }
});

export const dbItemsLocationDataState = atom({
  key: "dbItemsLocationData",
  default: {
    data: [],
    table: "",
    columns: ["id", "town", "country", "region", "province", "location_type", "coordinates"]
  }
});

export const dbItemsHarvardListDataState = atom({
  key: "dbItemsHarvardListData",
  default: {
    data: [],
    table: "",
    columns: ["id", "long_list_stars", "long_list_text", "short_list_text"]
  }
});

export const dbItemsMapDataState = atom({
  key: "dbItemsMapData",
  default: {
    data: [],
    table: "",
    columns: ["id", "acls_name", "acls_location_type", "acls_stars", "acls_grid_reference", "acls_address", 
              "acls_atlas_text", "acls_map_links", "ca_atlas_title", "ca_atlas_type", "ca_atlas_stars", 
              "ca_atlas_grid_reference", "ca_atlas_address", "ca_atlas_text", "ca_atlas_links"]
  }
});

export const dbItemsHandbookDataState = atom({
  key: "dbItemsHandbookData",
  default: {
    data: [],
    table: "",
    columns: ["id", "ca_hb_name", "ca_hb_type", "ca_hb_stars", "ca_hb_address", "ca_hb_text", "zone_hb_volume", 
              "zone_hb_number", "zone_hb_aux_list", "zone_hb_text"]
  }
});

export const dbItemsProtectedMonumentsDataState = atom({
  key: "dbItemsProtectedMonumentsData",
  default: {
    data: [],
    table: "",
    columns: ["id", "lpm_volume", "lpm_stars", "lpm_military_grid", "lpm_text"]
  }
});

export const dbUiColumnNamesDataState = atom({
  key: "dbUiColumnNamesData",
  default: {
    data: [],
    table: "",
    columns: ["field", "headerName", "filter", "sortable", "type"]
  }
})