import { atom, selector } from "recoil";

export const dbItemsRootDataState = atom({
  key: "dbItemsRootData",
  default: {
    data: [],
    table: "items_root",
    columns: ["internal_id", "name", "alternative_names", "associated_with", "association_type", "damage",
      "notes", "period", "photograph_links", "bibliography_damage"]
  }
});

export const dbItemsLocationDataState = atom({
  key: "dbItemsLocationData",
  default: {
    data: [],
    table: "items_location_data",
    columns: ["id", "town", "country", "region", "province", "location_type", "coordinates"]
  }
});

export const dbItemsHarvardListDataState = atom({
  key: "dbItemsHarvardListData",
  default: {
    data: [],
    table: "items_harvard_list_data",
    columns: ["id", "long_list_stars", "long_list_text", "short_list_text"]
  }
});

export const dbItemsMapDataState = atom({
  key: "dbItemsMapData",
  default: {
    data: [],
    table: "items_map_data",
    columns: ["id", "acls_name", "acls_location_type", "acls_stars", "acls_grid_reference", "acls_address",
      "acls_atlas_text", "acls_map_links", "ca_atlas_title", "ca_atlas_type", "ca_atlas_stars",
      "ca_atlas_grid_reference", "ca_atlas_address", "ca_atlas_text", "ca_atlas_links"]
  }
});

export const dbItemsHandbookDataState = atom({
  key: "dbItemsHandbookData",
  default: {
    data: [],
    table: "items_handbook_data",
    columns: ["id", "ca_hb_name", "ca_hb_type", "ca_hb_stars", "ca_hb_address", "ca_hb_text", "zone_hb_volume",
      "zone_hb_number", "zone_hb_aux_list", "zone_hb_text"]
  }
});

export const dbItemsProtectedMonumentsDataState = atom({
  key: "dbItemsProtectedMonumentsData",
  default: {
    data: [],
    table: "items_protected_monuments_data",
    columns: ["id", "lpm_volume", "lpm_stars", "lpm_military_grid", "lpm_text"]
  }
});

export const dbUiColumnNamesDataState = atom({
  key: "dbUiColumnNamesData",
  default: {
    data: [],
    table: "ui_column_names",
    columns: ["field", "headerName", "filter", "sortable", "type"]
  }
})

export const dbItemsDataState = selector({
  key: "dbItemsDataState",
  get: (({ get }) => {
    const items_root = get(dbItemsRootDataState);
    const items_location_data = get(dbItemsLocationDataState);
    const items_harvard_list_data = get(dbItemsHarvardListDataState);
    const items_map_data = get(dbItemsMapDataState);
    const items_handbook_data = get(dbItemsHandbookDataState);
    const items_protected_monuments_data = get(dbItemsProtectedMonumentsDataState);

    return {
        table: "all",
        columns: [...items_root.columns, ...items_location_data.columns, ...items_harvard_list_data.columns,
                  ...items_map_data.columns, ...items_handbook_data.columns, ...items_protected_monuments_data.columns],
        data: items_root.data.map((obj, index) => (
          Object.assign({}, obj, items_location_data.data[index], items_harvard_list_data.data[index],
            items_map_data.data[index], items_handbook_data.data[index], items_protected_monuments_data.data[index])  
        )
      )
    };
  })
})