package com.gardeleandreea.runner.service;

import com.gardeleandreea.runner.model.Activity;
import com.gardeleandreea.runner.model.User;
import com.gardeleandreea.runner.repository.ActivityRepository;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 * This service handles the logic related to user activities.
 * It provides methods to save new activities and retrieve activities for a
 * specific user.
 */
@Service
public class ActivityService {
  private final ActivityRepository activityRepository;

  /**
   * Constructor for ActivityService that initializes the repository.
   *
   * @param activityRepository The repository used to access activity data.
   */
  public ActivityService(ActivityRepository activityRepository) {
    this.activityRepository = activityRepository;
  }

  /**
   * Saves a new activity to the database.
   *
   * @param activity The activity to be added.
   */
  public void addNewActivity(Activity activity) {
    activityRepository.save(activity);
  }

  /**
   * Retrieves a list of activities for a specific user.
   *
   * @param user The user whose activities are to be retrieved.
   * @return A list of activities that belong to the user.
   */
  public List<Activity> getUserActivities(User user) {
    return activityRepository.findAllByUser(user);
  }
}
