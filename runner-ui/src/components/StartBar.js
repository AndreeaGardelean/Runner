import '../style/startBar.css';

/**
 * StartBar component renders a button that initiates an activity.
 * It displays the provided text and triggers a click event when pressed.
 * 
 * @param {Object} props - The props object.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} props.text - The text to display on the button.
 * 
 * @returns {JSX.Element} A <div> element containing the start activity button.
 */
export default function StartBar({ onClick, text }) {
  return (
    <div className="star-container" onClick={onClick}>
      <div className="start-bar">      
        <p>{text}</p>
      </div>
    </div>
  );
}