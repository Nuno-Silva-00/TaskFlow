ALTER TABLE projects ADD COLUMN updated_at TIMESTAMPTZ DEFAULT current_timestamp;
ALTER TABLE project_memberships ADD COLUMN updated_at TIMESTAMPTZ DEFAULT current_timestamp;