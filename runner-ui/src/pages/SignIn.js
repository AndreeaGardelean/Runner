import '../style/logIn.css';
import envelope from '../icons/envelope.svg';
import Button from '../components/Button';
import Input from '../components/Input';
import lock from '../icons/lock.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate();

  const [emailArrowActive, setEmailArrowActive] = useState('');
  const [emailInputDone, setEmailInputDone] = useState('');

  const [passArrowActive, setPassArrowActive] = useState('');
  const [passInputDone, setPassInputDone] = useState('');

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  function updateUserData(name, value) {
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // executes when email input field changes
  function handleEmailOnChange(event) {
    const value = event.target.value;
    if (value === "") {
      setEmailArrowActive('');
    } else {
      setEmailArrowActive('active');
    }
    updateUserData('email', event.target.value);
  };

  // executes when the arrow for the email input field is clicked
  function handleEmailClickHandler() {
    setEmailInputDone('done');
    setPassInputDone('active');
  };

  // executes when password inout field changes
  function handlePasswordOnChange(event) {
    const value = event.target.value;
    if (value === "") {
      setPassArrowActive('');
    } else {
      setPassArrowActive('active');
    }
    updateUserData('password', event.target.value);
  };

  // executes when the arrow of the password input field changes
  function handlePassClickHandler() {
    navigate('/');
  };

  return (
    <div className='form-container'>
      <div className='heading-wrapper'>
        <h2>Sign in</h2>
        <p className='form-info'>Welcome back!</p>
      </div>
      <div className="login-form">
        <form className='form'>

          <div className={`input-container email ${emailInputDone}`}>
            <Input inputType={"email"} inputPlaceholder={"Email address"} handler={handleEmailOnChange}/>
            <Button icon={envelope} active={emailArrowActive} clickHandler={handleEmailClickHandler}/>
          </div>

          <div className={`input-container password ${passInputDone}`}>
            <Input inputType={"password"} inputPlaceholder={"Password"} handler={handlePasswordOnChange} />
            <Button icon={lock} active={passArrowActive} clickHandler={handlePassClickHandler} />
          </div>
          <div className='signin-msg-container'>
            <p>New around here?</p>
            <Link to={'/signup'}>Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}