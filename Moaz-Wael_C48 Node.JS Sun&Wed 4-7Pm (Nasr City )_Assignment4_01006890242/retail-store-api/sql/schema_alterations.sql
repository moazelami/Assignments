-- =============================================================
-- Tasks 5A-5D - Schema modification statements (PostgreSQL)
-- These are also available as administrative endpoints under
-- /api/admin/schema (see src/app/admin/admin.routes.js).
-- Run manually only when needed; never on server startup.
-- =============================================================

-- 5A: Add a Category column to Products
ALTER TABLE products
ADD COLUMN category VARCHAR(255);

-- 5B: Remove the Category column
ALTER TABLE products
DROP COLUMN category;

-- 5C: Change contact_number to VARCHAR(15)
ALTER TABLE suppliers
ALTER COLUMN contact_number TYPE VARCHAR(15);

-- 5D: Add NOT NULL constraint to Products.name
ALTER TABLE products
ALTER COLUMN name SET NOT NULL;
