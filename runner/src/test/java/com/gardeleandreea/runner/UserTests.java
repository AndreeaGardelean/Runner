package com.gardeleandreea.runner;

import static org.assertj.core.api.Assertions.assertThat;

import com.gardeleandreea.runner.model.User;
import org.junit.jupiter.api.Test;

/**
 * Unit tests for the {@link User} model class.
 * This class tests the functionality of the User constructor and its getter
 * methods.
 */
public class UserTests {

  /**
   * Test the constructor fields are set correctly and the getters return the
   * expected values.
   */
  @Test
  public void testUserConstructorAndGetters() {
    String name = "Test User";
    String email = "test@example.com";
    String password = "password";

    User user = new User(name, email, password);

    assertThat(user.getName()).isEqualTo(name);
    assertThat(user.getEmail()).isEqualTo(email);
    assertThat(user.getPassword()).isEqualTo(password);
  }

  /**
   * Tests the new user has a user ID associated.
   */
  @Test
  public void testUserId() {
    User user = new User("Test User", "test@example.com", "password");
    user.getId();
    assertThat(user.getId()).isEqualTo(0);
  }
}
