package org.taskflow.repository;

import jakarta.enterprise.context.ApplicationScoped;
import org.taskflow.model.Project;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import java.util.List;
import java.util.UUID;

// This class is for all the interactions with the database - sql queries
@ApplicationScoped
public class ProjectRepository implements PanacheRepository<Project> {
    public List<Project> findByUserId(UUID userId) {
        return getEntityManager()
                .createQuery("Select p FROM Project p JOIN ProjectMemberships pm ON p.id = pm.projectId where pm.userId = :userId", Project.class)
                .setParameter("userId", userId)
                .getResultList();
    }
}
