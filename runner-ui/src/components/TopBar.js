import run from '../icons/logo.png';
import login from '../icons/login.svg';
import logout from '../icons/logout.svg';
import '../style/topBar.css';
import { useNavigate } from "react-router-dom";

/**
 * The function creates and returns a div containing the elements of the top bar of the application.
 * 
 * @returns <div> element containing the content of the top bar of the app
 */
export default function TopBar({logged, setLogged}) {
  const navigate = useNavigate();

  function handleLogInClick() {
    navigate('/signin');
  };

  function handleLogOutCLick() {
    setLogged(false);
    navigate('/signin');
    localStorage.removeItem('userId');
  };

  return (
    <div className="container-top" >
      <div className="top-bar">      
        <img className="top-bar-imgs" src={run} alt="Running Icon" />
        <p>Runner</p>
        <img className="user-icon" src={logged ? logout : login} alt="User Icon" onClick={logged ? handleLogOutCLick : handleLogInClick}/>
      </div>
    </div>
  )
}