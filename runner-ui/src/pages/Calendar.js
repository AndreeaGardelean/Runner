import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../style/calendar.css';
import Activity from '../components/Activity';

/**
 * ActivitiesCalendar component displays a calendar and a list of activities.
 * Fetches activities from the backend, marks them on the calendar,
 * and displays the activity details.
 *
 * @returns {JSX.Element} - Returns a JSX component containing a calendar and activities list.
 */
export default function ActivitiesCalendar() {
  const [value, onChange] = useState(new Date());
  const [activities, setActivities] = useState([]);

  /**
   * Fetches activities for the logged-in user by their userId from localStorage.
   * Updates the activities state with the list of activities retrieved.
   */
  async function getActivities() {
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch(`http://localhost:8080/runner/activity/get?userId=${userId}`);
      
      if (response.status === 200) {
        const reply = await response.json();
        setActivities(reply);
      } else {
        console.error('Failed to get activity:', response.status, response.statusText);
      }
    } catch (e) {
      console.error('UNABLE TO FETCH ACTIVITY => ', e);
    }
  }

  /**
   * useEffect hook to call getActivities function when the component is first rendered.
   */
  useEffect(() => {
    getActivities();
  }, []);

  /**
   * Marks days on the calendar where activities have been completed.
   * 
   * @param {Date} date - The date of the calendar tile being rendered.
   * @param {string} view - The view mode of the calendar (e.g., 'month', 'year').
   * @returns {string} - Returns the class name 'activity' if an activity exists on that date, otherwise an empty string.
   */
  function markActivityDay({ date, view }) {
    if (view === 'month') {
      const isActivityDay = activities.some(activity => {
        const activityDate = fromStringToDate(activity.date);
        return date.getDate() === activityDate.getDate() && date.getMonth() === activityDate.getMonth() && date.getFullYear() === activityDate.getFullYear();
      });
      return isActivityDay ? 'activity' : '';
    }
    return '';
  }

  /**
   * Converts a string in the format 'Oct 18, 2024 at 11:41' into a JavaScript Date object.
   * 
   * @param {string} dateString - The string representation of the date.
   * @returns {Date} - A JavaScript Date object.
  */
  function fromStringToDate(dateString) {
    const formattedDateString = dateString.replace(" at ", " ");
    const date = new Date(formattedDateString);

    return date;
  }

  return (
    <div className='activities-container'>
      <Calendar onChange={onChange} value={value} className={'calendar'} tileClassName={markActivityDay} />
      <div className='activities-list'>
        {activities.map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
}
