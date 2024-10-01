package com.gardeleandreea.runner;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gardeleandreea.runner.controller.UserController;
import com.gardeleandreea.runner.model.User;
import com.gardeleandreea.runner.repository.UserRepository;
import com.gardeleandreea.runner.service.UserAlreadyExistsException;
import com.gardeleandreea.runner.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

/**
 * Unit tests for the {@link UserController} class.
 * This class verifies the functionality of the user signup API endpoint.
 */
@WebMvcTest(UserController.class)
public class UserControllerTests {
  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ObjectMapper objectMapper;

  @MockBean
  private UserService userService;

  @MockBean
  private UserRepository userRepository;

  /**
   * Test the /signup API endpoint successfully creates a user account by checking
   * the return status is CREATED and the return value is the id of the new user
   * account.
   *
   * @throws Exception throws a {@link UserAlreadyExistsException} in the case
   *                   when a user
   *                   account is already registered with the given email address.
   */
  @Test
  public void testSignUpApi() throws Exception {
    String name = "User Test 1";
    String email = "user@test.com";
    String password = "usertest1";
    Long userId = 1L;

    User newUser = new User(name, email, password);
    String requestBody = objectMapper.writeValueAsString(newUser);

    when(userService.createNewUser(any(User.class))).thenReturn(userId);

    mockMvc
        .perform(post("/runner/user/signup")
            .contentType(MediaType.APPLICATION_JSON)
            .content(requestBody))
        .andExpect(status().isCreated())
        .andExpect(content().string(userId.toString()));

    verify(userService, times(1)).createNewUser(any(User.class));
  }

  /**
   * Tests the /signup API endpoint when a user already exists, expecting CONFLICT
   * status.
   *
   * @throws Exception UserAlreadyExistsException when a user account is created
   *                   with an already registered email address.
   */
  @Test
  public void testSignUpApiUserAlreadyExists() throws Exception {
    String name = "User Test 1";
    String email = "user@test.com";
    String password = "usertest1";

    User newUser = new User(name, email, password);
    String requestBody = objectMapper.writeValueAsString(newUser);

    when(userService.createNewUser(any(User.class))).thenThrow(new UserAlreadyExistsException());

    mockMvc
        .perform(post("/runner/user/signup")
            .contentType(MediaType.APPLICATION_JSON)
            .content(requestBody))
        .andExpect(status().isConflict());

    verify(userService, times(1)).createNewUser(any(User.class));
  }
}
