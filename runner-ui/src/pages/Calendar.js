import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../style/calendar.css';
import Activity from '../components/Activity';

export default function ActivitiesCalendar() {
  const [value, onChange] = useState(new Date());
  const activity = {
    title: 'The first activity',
    date: 'Oct 18, 2024 at 11:41',
    distance: '4.10',
    time: '30:55',
    pace: '7:20',
    calories: '200'
  }

  function markActivityDay({ date, view }) {
    console.log(date, date.getDate())
    const now = new Date();
    console.log('NOW DATE', now)
    if (view === 'month' && date.getDate() % 2 === 0) {
      return 'active';
    } return '';
  };

  return (
    <div className='activities-container'>
      <Calendar onChange={onChange} value={value} className={'calendar'} tileClassName={markActivityDay} />
      <div className='activities-list'>
        <Activity activity={activity} />
        <Activity activity={activity} />
        <Activity activity={activity} />
        <Activity activity={activity} />
        <Activity activity={activity} />
        <Activity activity={activity} />
      </div>
    </div>
  )
}