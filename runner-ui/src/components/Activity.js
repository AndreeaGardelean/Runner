import logo from '../icons/logo.png'; 
import ActivityData from './ActivityData';
  
export default function Activity({activity}) {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <img className="activity-logo" src={logo} alt="Runner Icon" />
        <div className='activity-metadata'>
          <p className='activity-title'>{activity.title}</p>
          <p className='activity-date'>{activity.date}</p>
        </div>
      </div>
      <div className='activity-info'>
        <ActivityData data={activity.distance} unit={"km"} />

        <ActivityData data={activity.time} unit={"time"} />
        
        <ActivityData data={activity.pace} unit={"min/km"} />

        <ActivityData data={activity.calories} unit={"Calories"} />
        
      </div>
    </div>
  )
}