package com.gardeleandreea.runner.service;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception thrown when a user account with the specified email address
 * already exists in the system.
 * This exception is annotated with {@link ResponseStatus} to return
 * a 409 Conflict status code when it is thrown from a controller.
 */
@ResponseStatus(HttpStatus.CONFLICT)
public class UserAlreadyExistsException extends RuntimeException {

  public UserAlreadyExistsException() {
    super("A user account is registered with this email address.");
  }
}
