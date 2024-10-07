import '../style/startBar.css';

/**
 * The function creates and returns the 'Start' button to start an activity.
 * 
 * @returns <div> element containing the elements that form the start activity button
 */
export default function StartBar({onClick}) {
  return (
    <div className="star-container" onClick={onClick}>
      <div className="start-bar">      
        <p>Start</p>
      </div>
    </div>
  )
}