package com.gardeleandreea.runner.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Represents a user in the system.
 * This class is an entity that maps to the "users" table in the database.
 * It contains user details such as name, email, and password.
 */
@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "name")
  private String name;

  @Column(name = "email")
  private String email;

  @Column(name = "password")
  private String password;

  protected User() {

  }

  /**
   * Creates a new user object with the specified name, email address and
   * password.
   *
   * @param name     the user name
   * @param email    the email of the user; must be unique
   * @param password the user account password
   */
  public User(String name, String email, String password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  /**
   * Retrieves the user id.
   *
   * @return the uniquely generated id for the user.
   */
  public Long getId() {
    return this.id;
  }

  /**
   * Retrieves the user's name.
   *
   * @return the name of the user.
   */
  public String getName() {
    return this.name;
  }

  /**
   * Retrieves the user's email address.
   *
   * @return the email address of the user.
   */
  public String getEmail() {
    return this.email;
  }

  /**
   * Retrieves the user's password.
   *
   * @return the user's password.
   */
  public String getPassword() {
    return this.password;
  }
}
