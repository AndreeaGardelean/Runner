package com.gardeleandreea.runner;

import static org.assertj.core.api.Assertions.assertThat;

import com.gardeleandreea.runner.model.User;
import com.gardeleandreea.runner.repository.UserRepository;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

/**
 * Unit tests for the {@link UserRepository} interface.
 * This class tests the data access methods for User entities, specifically
 * the retrieval of users by their email addresses.
 */
@DataJpaTest
public class UserRepositoryTests {

  @Autowired
  private UserRepository userRepository;

  private User testUser;

  @BeforeEach
  void setUp() {
    testUser = new User("Test User", "test@example.com", "password");
    userRepository.save(testUser);
  }

  /**
   * Test is a user can be found by the email address.
   */
  @Test
  void testFindUserByEmail() {
    Optional<User> foundUser = userRepository.findUserByEmail(testUser.getEmail());

    assertThat(foundUser).isPresent();
    assertThat(foundUser.get().getName()).isEqualTo(testUser.getName());
    assertThat(foundUser.get().getEmail()).isEqualTo(testUser.getEmail());
  }

  /**
   * Test that a user cannot be found when the specified email address is not in
   * the database.
   */
  @Test
  void testFindUserByEmail_NotFound() {
    Optional<User> foundUser = userRepository.findUserByEmail("nonexisting@example.com");

    assertThat(foundUser).isNotPresent();
  }
}
