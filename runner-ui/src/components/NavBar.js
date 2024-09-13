import run from '../icons/run.svg';
import races from '../icons/races.svg';
import calendar from '../icons/calendar.svg';
import '../style/navBar.css';

export default function NavBar() {
  return (
    <div className="container" >
      <div className="nav-bar">      
        <img className="nav-bar-imgs" src={calendar} alt="Calendar Icon"/>
        <img className="nav-bar-imgs" src={run} alt="Run Icon" />
        <img className="nav-bar-imgs" src={races} alt="Medal Icon"/>
      </div>
    </div>
  )
}