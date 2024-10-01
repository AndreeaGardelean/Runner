package com.gardeleandreea.runner.controller;

import com.gardeleandreea.runner.model.User;
import com.gardeleandreea.runner.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for handling user-related API requests.
 * This class provides endpoints for user operations such as creating new
 * accounts, retrieving user information, and managing user data. It acts as a
 * bridge between the client-side application and the user service layer,
 * handling HTTP requests and responses.
 * The controller is configured to allow cross-origin requests from the
 * specified origin.
 */
@RestController
@RequestMapping("runner/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
  private final UserService userService;

  /**
   * Constructs a UserController with specified UserService.
   *
   * @param userService the user service used to handle user-related operations,
   *                    such as creating new users.
   */
  public UserController(UserService userService) {
    this.userService = userService;
  }

  /**
   * API endpoint for adding a new user to the database. Used when the user
   * creates a new account.
   * The user object must contain the fields name, email, password for account
   * creation.
   *
   * @param user the user object from the View containing account information
   * @return the uniquely generated ID of the newly created user
   */
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping("/signup")
  public Long createNewAccount(@Validated @RequestBody User user) {
    Long id = userService.createNewUser(user);
    return id;
  }
}
