import run from '../icons/logo.png';
import '../style/topBar.css';

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