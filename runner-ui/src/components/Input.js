import '../style/input.css';

export default function Input({ inputType, inputId, inputPlaceholder, handler }) {

  return (
    <input type={inputType} className="input-field" id={inputId} placeholder={inputPlaceholder} onChange={handler}></input>
  )
}