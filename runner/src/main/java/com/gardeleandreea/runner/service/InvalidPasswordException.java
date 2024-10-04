package com.gardeleandreea.runner.service;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception thrown when a user attempts to sign-in with an invalid password.
 * This exception is annotated with {@link ResponseStatus} to return
 * a 409 Conflict status code when it is thrown from a controller.
 */
@ResponseStatus(HttpStatus.CONFLICT)
public class InvalidPasswordException extends RuntimeException {
  public InvalidPasswordException() {
    super("The password doesn't match! Try again.");
  }
}
