import arrow from '../icons/arrow.svg';
import '../style/button.css';

/**
 * A styled button component that displays a styled button element containing a custom icon passed as a prop and a built-in arrow icon. 
 * The component is used in the sign-in and sign-up form. 
 * @param {string} icon - The path to the custom icon to be displayed within the button.
 * @param {string} active - The additional class which can be 'active' or ''. The class name changes when the input field changes state from empty to not empty. It is used to allow events to the button when the arrow is displayed (when the input field is not empty).
 * @param {function} clickHandler - The function which handles button's 'onClick' event.
 * @returns {JSX.Element} The styled button component containing two icons : a custom icon and a built-in arrow icon.
 */
export default function Button({ icon, active, clickHandler }) {

  return (
    <div className={`div-btn ${active}`}>
      <button
        className={`submit`}
        type="button"
        onClick={clickHandler}
      >
        <span className={`icon custom`}>
          <img src={icon} alt='Icon' />
        </span>
        <span className="icon arrow" >
          <img src={arrow} alt='Arrow Icon' />
        </span>
      </button>
    </div>
  );
};
