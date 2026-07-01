import React, { useId } from 'react'

function InputField({
  label,
  data,
  onCityChange,
  onButtonChange
 

}) {
  const userId=useId();
  return (
    <div className='inputField'>
   <label htmlFor={userId}>{label}</label>
   <input type="text" 
   id={userId}
   value={data}
   onChange={(e)=> onCityChange && onCityChange(e.target.value)}
   placeholder='Enter the Useraname'
   />
    <button 
    onClick={onButtonChange}
    >
      Search
    </button>
    </div>
  )
}

export default InputField
