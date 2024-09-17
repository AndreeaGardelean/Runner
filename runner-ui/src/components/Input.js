import '../style/input.css';

/**
 * A styled input field used in the sign-up and sign-in form with customizable type, placeholder and event handler.
 * @param {string} inputType - The type of the input field (e.g. text, password, email).
 * @param {string} inputPlaceholder - The placeholder text to be displayed within the input field.
 * @param {function} handler - The function which handles 'onChange' events of the input field. 
 * @returns {JSX.Element} A styled input field containing the specified placeholder, type and change event handler.
 */
export default function Input({ inputType, inputPlaceholder, handler }) {
  return (
    <input type={inputType} className="input-field" placeholder={inputPlaceholder} onChange={handler}></input>
  )
};