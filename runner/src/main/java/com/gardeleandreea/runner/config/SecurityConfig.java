package com.gardeleandreea.runner.config;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 * SecurityConfig class configures the security settings for the app, enabling
 * CORS and specifying security filter chain.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

  /**
   * Configures the security filter chain, allowing access to specific endpoints
   * without authentication, enabling form-based login, and configuring CORS.
   *
   * @param http the HttpSecurity object used to define security configurations
   * @return a configured SecurityFilterChain object
   * @throws Exception if any error occurs during configuration
   */
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.cors(Customizer.withDefaults()).authorizeHttpRequests(authorize -> authorize
        .requestMatchers("/runner/user/signup", "/runner/user/signin").permitAll()
        .anyRequest().authenticated())
        .formLogin(formLogin -> formLogin
            .loginPage("/login")
            .permitAll())
        .rememberMe(Customizer.withDefaults())
        .csrf(csrf -> csrf.disable());
    return http.build();
  }

  /**
   * Configures CORS (Cross-Origin Resource Sharing) settings for the application.
   * It allows cross-origin requests from a specific origin and permits specific
   * methods and headers.
   *
   * @return a CorsConfigurationSource object containing the CORS settings
   */
  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000")); // Allow your client URL
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "Accept"));
    configuration.setExposedHeaders(Arrays.asList("Authorization"));
    configuration.setAllowCredentials(true);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
  }
}
