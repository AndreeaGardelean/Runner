package com.gardeleandreea.runner.service;

import com.gardeleandreea.runner.model.User;
import com.gardeleandreea.runner.repository.UserRepository;
import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;
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
  private final PasswordEncoder passwordEncoder;

  /**
   * Constructs a UserService with the specified UserRepository.
   *
   * @param userRepository the UserRepository to be used for accessing user data
   *                       in the database.
   */
  public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
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
    String hashedPassword = passwordEncoder.encode(user.getPassword());
    user.setPassword(hashedPassword);

    User savedUser = userRepository.save(user);
    return savedUser.getId();
  }

  /**
   * Authenticates a user by checking if the provided email exists in the system
   * and if the submitted password matches the stored hashed password.
   * This method looks up the user by their email, then compares the provided
   * plaintext password with the stored hashed password using the
   * {@link PasswordEncoder}.
   * If the email is not registered or the password is incorrect, an exception is
   * thrown.
   *
   * @param user the {@link User} object containing the user's email and plaintext
   *             password.
   * @return the ID of the authenticated user if the email and password match.
   * @throws InvalidPasswordException    if the provided password does not match
   *                                     the stored password.
   * @throws EmailNotRegisteredException if the email is not registered in the
   *                                     system.
   */
  public Long userSignIn(User user) {
    String email = user.getEmail();
    Optional<User> foundUser = userRepository.findUserByEmail(email);

    if (foundUser.isPresent()) {
      String savedPassword = foundUser.get().getPassword();
      String submittedPassword = user.getPassword();

      if (!passwordEncoder.matches(submittedPassword, savedPassword)) {
        throw new InvalidPasswordException();
      }
      return foundUser.get().getId();
    } else {
      throw new EmailNotRegisteredException();
    }
  }
}
