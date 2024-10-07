package com.gardeleandreea.runner.repository;

import com.gardeleandreea.runner.model.Activity;
import com.gardeleandreea.runner.model.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for accessing activity data from the database.
 * This interface extends JpaRepository, providing CRUD operations and
 * custom query methods for the Activity entity.
 */
public interface ActivityRepository extends JpaRepository<Activity, Long> {

  /**
   * Returns a list of activities which map to the specified User entity.
   *
   * @param user the user entity the activities are mapped to.
   * @return a list of activities that map to the specified user.
   */
  List<Activity> findAllByUser(User user);
}
