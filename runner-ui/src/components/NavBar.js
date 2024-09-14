import run from '../icons/run.svg';
import races from '../icons/races.svg';
import calendar from '../icons/calendar.svg';
import '../style/navBar.css';
import { useNavigate } from "react-router-dom";

/**
 * The function creates and returns the bottom navigation bar of the application, containing three other buttons.
 * 
 * @returns <div> element containing the navigation buttons of the application
 */
export default function NavBar() {
  const navigate = useNavigate();
  
  // function handles click events for the races button
  // redirects to the races page
  function handleRacesClick() {
    navigate('/races');
  };

  // function handles click events for the home button
  // redirect to the home page
  function handleHomeClick() {
    navigate('/');
  };

  // function handles click events for the activity history button
  // redirects to the activity history page
  function handleCalendarClick() {
    navigate('/calendar');
  };

  return (
    <div className="container" >
      <div className="nav-bar">      
        <img className="nav-bar-imgs" id="calendar" src={calendar} alt="Calendar Icon" onClick={handleCalendarClick} />
        <img className="nav-bar-imgs" id="home" src={run} alt="Run Icon" onClick={handleHomeClick} />
        <img className="nav-bar-imgs" id="races" src={races} alt="Medal Icon" onClick={handleRacesClick} />
      </div>
    </div>
  )
}