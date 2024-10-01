package com.gardeleandreea.runner.repository;

import com.gardeleandreea.runner.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for accessing user data from the database.
 * This interface extends JpaRepository, providing CRUD operations and
 * custom query methods for the User entity.
 */
public interface UserRepository extends JpaRepository<User, Long> {

  /**
   * Find the User object based on their email.
   * If a user with the specified email address exists, an Optional containing the
   * User object is returned; otherwise an empty Optional is returned.
   *
   * @param email address of the user to be found.
   * @return a User object with the specified email address.
   */
  Optional<User> findUserByEmail(String email);
}
