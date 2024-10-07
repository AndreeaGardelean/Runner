package com.gardeleandreea.runner.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

/**
 * This class represents an activity performed by a user.
 * It contains details such as the activity's title, date, distance,
 * time, pace, and calories burned.
 */
@Entity
@Table(name = "activity")
public class Activity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "title")
  String title;

  @Column(name = "date")
  String date;

  @Column(name = "distance")
  String distance;

  @Column(name = "time")
  String time;

  @Column(name = "pace")
  String pace;

  @Column(name = "calories")
  String calories;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "userId", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JsonIgnore
  private User user;

  /**
   * Gets the user associated with this activity.
   *
   * @return The user who performed this activity.
   */
  public User getUser() {
    return this.user;
  }

  /**
   * Sets the user associated with this activity.
   *
   * @param user The user who performed this activity.
   */
  public void setUser(User user) {
    this.user = user;
  }

  /**
   * Gets the title of the activity.
   *
   * @return The title of the activity.
   */
  public String getTitle() {
    return this.title;
  }

  /**
   * Gets the date of the activity.
   *
   * @return The date of the activity.
   */
  public String getDate() {
    return this.date;
  }

  /**
   * Gets the distance of the activity.
   *
   * @return The distance of the activity.
   */
  public String getDistance() {
    return this.distance;
  }

  /**
   * Gets the time taken for the activity.
   *
   * @return The time taken for the activity.
   */
  public String getTime() {
    return this.time;
  }

  /**
   * Gets the pace of the activity.
   *
   * @return The pace of the activity.
   */
  public String getPace() {
    return this.pace;
  }

  /**
   * Gets the calories burned during the activity.
   *
   * @return The calories burned during the activity.
   */
  public String getCalories() {
    return this.calories;
  }

  /**
   * Returns a string representation of the activity, including
   * its title, date, distance, time, pace, and calories.
   *
   * @return A string representation of the activity.
   */
  @Override
  public String toString() {
    return "title: " + this.getTitle()
        + ", date: " + this.getDate()
        + ", distance: " + this.getDistance()
        + ", time: " + this.getTime()
        + ", pace: " + this.getPace()
        + ", calories: " + this.getCalories();
  }
}
