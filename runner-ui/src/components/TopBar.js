import run from '../icons/logo.png';
import '../style/topBar.css';

/**
 * The function creates and returns a div containing the elements of the top bar of the application.
 * 
 * @returns <div> element containing the content of the top bar of the app
 */
export default function TopBar() {
  return (
    <div className="container-top" >
      <div className="top-bar">      
        <img className="top-bar-imgs" src={run} alt="Running Icon" />
        <p>Runner</p>
      </div>
    </div>
  )
}