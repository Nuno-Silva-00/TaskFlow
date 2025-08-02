package org.taskflow.model;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.UUID;

// This class Represents the database Table
@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @Column(name = "created_by")
    private UUID createdBy;

    @Column(name = "created_at")
    private Instant createdAt = Instant.now();

    @Column(name = "updated_at")
    private Instant updatedAt = Instant.now();

    @PreUpdate
    public void onUpdate() {
        updatedAt = Instant.now();
    }

    //Getters and Setters
}
