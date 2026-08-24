-- =============================================================
-- Tasks 14, 15, 16 - Database user permissions (PostgreSQL)
-- Run these statements manually with psql or an admin tool,
-- while connected as a superuser (e.g. postgres).
-- Do NOT expose this through a public API endpoint.
-- =============================================================

-- -------------------------------------------------------------
-- Task 14: Create user store_manager and grant
--          SELECT, INSERT, UPDATE on all tables in public schema
-- -------------------------------------------------------------
CREATE USER store_manager WITH LOGIN PASSWORD 'StrongPass_123';

GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO store_manager;

-- SERIAL columns need sequence access for INSERT to work
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO store_manager;

-- -------------------------------------------------------------
-- Task 15: Revoke UPDATE from store_manager
-- -------------------------------------------------------------
REVOKE UPDATE ON ALL TABLES IN SCHEMA public FROM store_manager;

-- -------------------------------------------------------------
-- Task 16: Grant DELETE only on the Sales table
-- -------------------------------------------------------------
GRANT DELETE ON sales TO store_manager;

-- =============================================================
-- Final expected permissions:
--   SELECT -> all tables
--   INSERT -> all tables
--   UPDATE -> none
--   DELETE -> sales only
--
-- Optional verification queries:
--   SELECT has_table_privilege('store_manager', 'products', 'SELECT');  -- t
--   SELECT has_table_privilege('store_manager', 'products', 'UPDATE');  -- f
--   SELECT has_table_privilege('store_manager', 'sales',   'DELETE');   -- t
--   SELECT has_table_privilege('store_manager', 'products','DELETE');   -- f
-- =============================================================
