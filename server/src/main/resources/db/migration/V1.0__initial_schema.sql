CREATE
    EXTENSION IF NOT EXISTS "uuid-ossp";

-- create trigger function to auto update the tables timestamps
CREATE
    OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.updated_at
        = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$
    LANGUAGE plpgsql;

CREATE TABLE users
(
    id         UUID        DEFAULT uuid_generate_v4() PRIMARY KEY,
    email      VARCHAR(255) UNIQUE NOT NULL,
    password   TEXT                NOT NULL,
    full_name  VARCHAR(100)        NOT NULL,
    is_active  BOOLEAN     DEFAULT TRUE,
    is_admin   BOOLEAN     DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects
(
    id          UUID        DEFAULT uuid_generate_v4() PRIMARY KEY,
    name        TEXT NOT NULL,
    description TEXT,
    created_by  UUID REFERENCES users (id),
    created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles
(
    id   UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT UNIQUE NOT NULL -- 'owner', 'admin', 'user' ...
);

CREATE TABLE project_memberships
(
    id         UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id    UUID REFERENCES users (id),
    project_id UUID REFERENCES projects (id),
    role_id    UUID REFERENCES roles (id),
    UNIQUE (user_id, project_id)
);

CREATE TRIGGER set_updated_at_users
    BEFORE UPDATE
    ON users
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();