CREATE DOMAIN site_type AS TEXT
  CHECK (
    VALUE IN ('church', 'palace', 'house', 'monument', 'cultural institution')
  );

CREATE DOMAIN star_count AS INTEGER
    CHECK (
      VALUE >= 0 AND VALUE <= 4
    );

CREATE TABLE italy_sample_root (
    id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    name TEXT,
    alt_name_1 TEXT,
    alt_name TEXT,
    town TEXT,
    country TEXT CHECK (country in ('Italy')),
    region TEXT,
    province TEXT,
    notes TEXT,
    period TEXT,
    period_2 TEXT,
    associated_with TEXT,
    damaged_bibliography TEXT,
    known_damage TEXT,
    photograph_links TEXT[]
);

CREATE TABLE italy_sample_coordinates (
    id UUID REFERENCES italy_sample_root (id) ON DELETE CASCADE,
    coordinates_ge_osm TEXT[],
    s_centre TEXT[],
    coordinates_polygon_ge TEXT,
    coordinates_centre_georectified TEXT,
    coordinates_polygon_georectified TEXT,
    archives_list BOOL,
    archives_list_text BOOL
);

CREATE TABLE italy_harvard_long_list (
    id UUID REFERENCES italy_sample_root (id) ON DELETE CASCADE,
    harvard_long_list BOOL,
    harvard_long_list_stars star_count,
    harvard_long_list_text TEXT,
    harvard_short_list BOOL,
    harvard_short_list_text TEXT
);

CREATE TABLE italy_acls_map_data (
    id UUID REFERENCES italy_sample_root (id) ON DELETE CASCADE,
    acls_map_name TEXT,
    acls_map_type site_type,
    acls_map_stars star_count,
    acls_map_grid_reference TEXT,
    acls_map_address TEXT,
    acls_map_text TEXT,
    acls_map_image_links TEXT[],
    acs_map_image_links BOOL
);

CREATE TABLE italy_acls_atlas_data (
    id UUID REFERENCES italy_sample_root (id) ON DELETE CASCADE,
    acls_atlas_title TEXT,
    acls_atlas_type site_type,
    acls_atlas_stars star_count,
    acls_atlas_grid_reference TEXT,
    acls_atlas_address TEXT
);

CREATE TABLE italy_ca_atlas (
    id UUID REFERENCES italy_sample_root (id) ON DELETE CASCADE,
    ca_atlas_text TEXT,
    ca_handbook TEXT CHECK (ca_handbook in ('17A', '17B')),
    ca_handbook_type site_type,
    ca_handbook_stars star_count,
    ca_handbook_address TEXT,
    ca_handbook_text TEXT
);

CREATE TABLE italy_lpm_data (
    id UUID REFERENCES italy_sample_root (id) ON DELETE CASCADE,
    lpm_vol INT8,
    lpm_stars star_count,
    lpm_military_grid TEXT,
    lpm_text TEXT
);

CREATE TABLE italy_zone (
    id UUID REFERENCES italy_sample_root (id) ON DELETE CASCADE,
    zone_handbook_vol TEXT,
    zone_handbook_aux_list BOOL,
    zone_hb_text TEXT
);

CREATE TABLE ui_column_names (
    Header TEXT NOT NULL PRIMARY KEY,
    accessor TEXT NOT NULL
)