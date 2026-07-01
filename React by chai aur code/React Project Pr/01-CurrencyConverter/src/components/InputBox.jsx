import React, { useId } from 'react'

function InputBox({
label,
amount,
onAmountChange,
onCurrencyChange,
currencyOption=[],
selectedCurrency="usd",


}) {

const amountInputId=useId();


  return (
   <div>
     <div className='left-side'>
      <label htmlFor={amountInputId}>{label}</label>
      <input type="number"
      id={amountInputId}
      value={amount}
      placeholder='Amount'
      onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
      
      />
     </div>
     <div className="right-side">
      <p>Currency Type</p>
      <select value={selectedCurrency}
      onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
      >
       {currencyOption.map((currency)=>{
        <option value={currency} key={currency}>{currency}</option>
       })}



      </select>
     </div>
</div>
  
  )
}

export default InputBox
