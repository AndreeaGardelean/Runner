import { useState, useEffect } from 'react';
import ActivityProgress from '../components/ActivityProgress.js';
import MapComponent from '../components/MapComponent.js';
import StartBar from '../components/StartBar.js';

/**
 * Home component that holds all elements of the home page.
 * It manages the state for the activity timer, distance, pace, and title,
 * and handles the logic for starting and saving activities.
 * 
 * @returns {JSX.Element} A <div> element containing the main components
 * for the home page, including the map, activity progress, and start bar.
 */
export default function Home() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('Start');

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState('0:00');

  const [distance, setDistance] = useState(0);
  const [pace, setPace] = useState(0);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const [title, setTitle] = useState(days[today.getDay()]);

  // Metadata of the current activity
  const activityData = {
    title: title,
    date: formatDate(today),
    distance: '4.10',
    time: '30:55',
    pace: '7:20',
    calories: '200'
  };

  /**
   * Formats a Date object into a string of the format "Oct 01, 2024 at 11:41".
   * 
   * @param {Date} date - The date object to format.
   * @returns {string} The formatted date string.
   */
  function formatDate(date) {
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    const formattedDate = date.toLocaleString('en-UK', options);
    return formattedDate.replace(',', ' at');
  }

  useEffect(() => {
    if (text === 'End') {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [text]);

  useEffect(() => {
    setTime(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
  }, [minutes, seconds]);

  /**
   * Starts or ends the activity based on the current state of the text.
   * If starting, makes the activity progress visible; if ending, 
   * saves the activity data and resets the timer.
   */
  function startActivity() {
    if (text === 'Start') {
      setVisible(true);
      setText('End');
    } else {
      saveActivity();
      setVisible(false);
      setText('Start');
      resetTimer();
    }
  }

  /** Resets the timer by setting seconds and minutes to zero. */
  function resetTimer() {
    setSeconds(0);
    setMinutes(0);
  }

  /**
   * Saves the current activity data to the server via a POST request.
   * Logs success or error messages based on the response status.
   */
  async function saveActivity() {
    activityData.time = time;
    activityData.date = new Date().getTime();
    activityData.distance = distance;
    activityData.pace = 0;
    activityData.calories = 0;

    try {
      console.log(activityData);
      const response = await fetch(`http://localhost:8080/runner/activity/create?userId=${localStorage.getItem("userId")}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(activityData),
        credentials: 'include'
      });
      if (response.status === 201) {
        console.log('ACTIVITY ADDED!');
      } else {
        console.error('Failed to add activity:', response.status, response.statusText);
      }
    } catch (e) {
      console.error('UNABLE TO SAVE ACTIVITY => ', e);
    }
  }

  /**
   * Updates the title of the activity based on the user's input.
   * 
   * @param {Event} e - The event triggered by the input change.
   */
  function onTitleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <div>
      <MapComponent />
      <ActivityProgress time={time} distance={distance} pace={pace} visible={visible} title={title} onChange={onTitleChange} />
      <StartBar text={text} onClick={startActivity} />
    </div>
  );
}