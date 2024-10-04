package com.gardeleandreea.runner.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * This class is responsible for configuring security components used
 * for encoding and verifying user passwords in the application.
 */
@Configuration
public class UserSecurity {

  /**
   * Provides a {@link PasswordEncoder} bean that uses BCrypt hashing algorithm
   * to encode passwords.
   * BCrypt is a widely used algorithm for securely hashing passwords, providing
   * built-in protections against brute force attacks.
   *
   * @return a {@link BCryptPasswordEncoder} instance used to encode passwords
   */
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
