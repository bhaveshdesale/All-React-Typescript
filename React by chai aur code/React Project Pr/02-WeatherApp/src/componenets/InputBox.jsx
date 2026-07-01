import React from 'react'
import { useId } from 'react'

function InputBox({
  label,
  city,
  onCityChange,
  onButtonChange


}) {

  const userId=useId();
  return (
    <div className='input-box'>
   <label htmlFor={userId}
   >{label}</label>
   <input type="text"
   id={userId}
   value={city}
   placeholder='Enter the City'
   onChange={(e)=>onCityChange && onCityChange(e.target.value)}
   />

   <button onClick={onButtonChange}>Search</button>

      
    </div>
  )
}

export default InputBox
