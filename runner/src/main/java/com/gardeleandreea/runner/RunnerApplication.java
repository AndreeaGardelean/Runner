package com.gardeleandreea.runner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The main entry point of the Runner application.
 */
@SpringBootApplication
public class RunnerApplication {

  /**
   * The main method which serves as the entry point for the Java application.
   *
   * @param args the command-line arguments passed during the application startup.
   */
  public static void main(String[] args) {
    SpringApplication.run(RunnerApplication.class, args);
  }

}
