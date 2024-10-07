package com.gardeleandreea.runner.controller;

import com.gardeleandreea.runner.model.Activity;
import com.gardeleandreea.runner.model.User;
import com.gardeleandreea.runner.repository.UserRepository;
import com.gardeleandreea.runner.service.ActivityService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for handling activity-related API requests.
 * This class provides endpoints for activity operations such as creating new
 * activity, adn retrieving all activities for a specific user. It acts as a
 * bridge between the client-side application and the activity service layer,
 * handling HTTP requests and responses.
 */
@RestController
@RequestMapping("runner/activity")
public class ActivityController {
  private final ActivityService activityService;
  private final UserRepository userRepository;

  /**
   * Constructor to initialize the ActivityController.
   *
   * @param activityService service that handles activity-related operations.
   * @param userRepository  repository that interacts with user data.
   */
  public ActivityController(ActivityService activityService, UserRepository userRepository) {
    this.activityService = activityService;
    this.userRepository = userRepository;
  }

  /**
   * Creates a new activity for a specific user.
   *
   * @param userId   The ID of the user for whom the activity is being created.
   * @param activity The activity details that need to be saved.
   */
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping("/create")
  public void createNewActivity(@RequestParam Long userId,
      @Validated @RequestBody Activity activity) {
    User user = userRepository.findById(userId).get();
    activity.setUser(user);
    activityService.addNewActivity(activity);
  }

  /**
   * Retrieves a list of activities for a specific user.
   *
   * @param userId The Id of the user whose activities are to be retrieved.
   * @return A list of activities for the specified user.
   */
  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/get")
  public List<Activity> getActivities(@RequestParam Long userId) {
    User user = userRepository.getById(userId);
    List<Activity> activities = activityService.getUserActivities(user);
    return activities;
  }
}
