import '../style/logIn.css';
import envelope from '../icons/envelope.svg';
import Button from '../components/Button';
import Input from '../components/Input';
import user from '../icons/user.svg';
import lock from '../icons/lock.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate();
  
  const [nameArrowActive, setNameArrowActive] = useState('');
  const [nameInputDone, setNameInputDone] = useState('active');

  const [emailArrowActive, setEmailArrowActive] = useState('');
  const [emailInputDone, setEmailInputDone] = useState('');

  const [passArrowActive, setPassArrowActive] = useState('');
  const [passInputDone, setPassInputDone] = useState('');

  const [passRepeatArrowActive, setPassRepeatArrowActive] = useState('');
  const [passRepeatInputDone, setPassRepeatInputDone] = useState('');

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  function updateUserData(name, value) {
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // executes when the name input field changes
  function handleNameOnChange(event) {
    const value = event.target.value;
    if (value === "") {
      setNameArrowActive('');
    } else {
      setNameArrowActive('active');
    }
    updateUserData('name', event.target.value);
  };

  // executes when the icon for the name input field is clicked
  function handleNameClickHandler(event) {
    setNameInputDone('done');
    setEmailInputDone('active');
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
  function handlePassClickHandler(event) {
    setPassInputDone('done');
    setPassRepeatInputDone('active');
  };

  // executes when the repeat password input field changes
  function handlePassRepeatOnChange(event) {
    const value = event.target.value;
    if (value === "") {
      setPassRepeatArrowActive('');
    } else if(value === userData['password']) {
      setPassRepeatArrowActive('active');
    }
    updateUserData('repeatPassword', event.target.value);
  };

  // executes when the arrow of the repeat password field is clicked
  function handlePassRepeatClickHandler() {
    console.log(userData)
    navigate('/');
  };

  return (
    <div className='form-container'>
      <div className='heading-wrapper'>
        <h2>Sign up</h2>
        <p className='form-info'>Fill in your information</p>
      </div>
      <div className="login-form">
        <form className='form'>
          
          <div className={`input-container name ${nameInputDone}`}>
            <Input inputType={"text"} inputPlaceholder={"Your Name"} handler={handleNameOnChange} />
            <Button icon={user} active={nameArrowActive} clickHandler={handleNameClickHandler} />
          </div>

          <div className={`input-container email ${emailInputDone}`}>
            <Input inputType={"email"} inputPlaceholder={"Email address"} handler={handleEmailOnChange}/>
            <Button icon={envelope} active={emailArrowActive} clickHandler={handleEmailClickHandler}/>
          </div>

          <div className={`input-container password ${passInputDone}`}>
            <Input inputType={"password"} inputPlaceholder={"Password"} handler={handlePasswordOnChange} />
            <Button icon={lock} active={passArrowActive} clickHandler={handlePassClickHandler} />
          </div>

          <div className={`input-container repeat-password ${passRepeatInputDone}`}>
            <Input inputType={"password"} inputPlaceholder={"Repeat Password"} handler={handlePassRepeatOnChange} />
            <Button icon={lock} active={passRepeatArrowActive} clickHandler={handlePassRepeatClickHandler} />
          </div>
        <div className='signup-msg-container'>
          <p>Already have an account?</p>
          <Link to={'/signin'}>Sign In</Link>
        </div>
        </form>
      </div>
    </div>
  )
}