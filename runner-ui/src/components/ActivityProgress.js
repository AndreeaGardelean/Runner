import '../style/activityProgress.css';

/**
 * ActivityProgress component displays the current activity details,
 * including time, distance, pace, and a title input field.
 *
 * @param {Object} param0 - The props object.
 * @param {string} param0.time - The current time counter of the activity.
 * @param {string} param0.distance - The distance covered during the activity.
 * @param {string} param0.pace - The pace of the activity.
 * @param {boolean} param0.visible - A flag indicating if the component should be visible (visible when the start button has been clicked).
 * @param {string} param0.title - The default title of the activity.
 * @param {function} param0.onChange - The function to call when the title input changes.
 * 
 * @returns {JSX.Element} The rendered ActivityProgress component.
 */
export default function ActivityProgress({ time, distance, pace, visible, title, onChange }) {
  return (
    <div className={visible ? "activity-progress" : "hidden"}>
      <label>
        <input id='title' type='text' defaultValue={title + ' Run'} onChange={onChange} />
      </label>
      <div className='activity-data'>
        <div id="time" className="progress">{time}</div>
        <div id="distance" className="progress">{distance}</div>
        <div id="pace" className="progress">{pace}</div>
      </div>
    </div>
  )
}