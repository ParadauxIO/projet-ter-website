ALTER TABLE italy_sample_root ENABLE ROW LEVEL SECURITY;
ALTER TABLE italy_sample_coordinates ENABLE ROW LEVEL SECURITY;
ALTER TABLE italy_harvard_long_list ENABLE ROW LEVEL SECURITY;
ALTER TABLE italy_acls_map_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE italy_acls_atlas_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE italy_ca_atlas ENABLE ROW LEVEL SECURITY;
ALTER TABLE italy_lpm_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE italy_zone ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON "public"."italy_sample_root"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."italy_sample_coordinates"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."italy_harvard_long_list"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."italy_acls_map_data"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."italy_acls_atlas_data"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."italy_ca_atlas"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."italy_lpm_data"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."italy_zone"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."ui_column_names"
AS PERMISSIVE FOR SELECT
TO public
USING (true)
