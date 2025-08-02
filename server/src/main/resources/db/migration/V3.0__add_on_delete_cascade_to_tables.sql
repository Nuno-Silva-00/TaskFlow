ALTER TABLE project_memberships
    DROP CONSTRAINT IF EXISTS project_memberships_user_id_fkey;

ALTER TABLE project_memberships
    ADD CONSTRAINT project_memberships_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE;

ALTER TABLE project_memberships
    DROP CONSTRAINT IF EXISTS project_memberships_project_id_fkey;

ALTER TABLE project_memberships
    ADD CONSTRAINT project_memberships_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE;