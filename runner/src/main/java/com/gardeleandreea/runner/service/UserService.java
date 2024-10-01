package com.gardeleandreea.runner.service;

import com.gardeleandreea.runner.model.User;
import com.gardeleandreea.runner.repository.UserRepository;
import org.springframework.stereotype.Service;

/**
 * Service class responsible for managing user-related operations,
 * such as creating new users in the system.
 * This class interacts with the {@link UserRepository} to access user data
 * stored in the database.
 */
@Service
public class UserService {
  private final UserRepository userRepository;

  /**
   * Constructs a UserService with the specified UserRepository.
   *
   * @param userRepository the UserRepository to be used for accessing user data
   *                       in the database.
   */
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Creates a new user in the system.
   * This method checks if a user with the given email already exists in the
   * database.
   * If the email is already registered, it throws a
   * {@link UserAlreadyExistsException}.
   *
   * @param user the User object containing the user's details (name, email,
   *             password)
   * @return the unique ID of the newly created user
   * @throws UserAlreadyExistsException if a user with the given email already
   *                                    exists
   */
  public Long createNewUser(User user) {
    String email = user.getEmail();
    if (userRepository.findUserByEmail(email).isPresent()) {
      throw new UserAlreadyExistsException();
    }
    User savedUser = userRepository.save(user);
    return savedUser.getId();
  }
}
