package org.taskflow.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "project_memberships")
public class ProjectMemberships {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "project_id")
    private UUID projectId;

    @Column(name = "role_id")
    private UUID roleId;
}
