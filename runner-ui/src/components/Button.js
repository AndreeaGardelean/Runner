import arrow from '../icons/arrow.svg';
import '../style/button.css';

export default function Button({ name, icon, className, active, clickHandler }) {

  return (
    <div className={`div-btn ${active}`}>
      <button
        className={`submit ${name}`}
        type="button"
        onClick={clickHandler}
      >
        <span className={`icon ${className}`}>
          <img src={icon} alt='Icon' />
        </span>
        <span className="icon arrow" >
          <img src={arrow} alt='Arrow Icon' />
        </span>
      </button>
    </div>
  );
}
