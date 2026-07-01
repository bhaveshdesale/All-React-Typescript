import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import InputBox from './components/InputBox'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount]=useState();
const [from, setFrom]=useState("usa");
const [to, setTo]=useState("inr");
const [convertedAmount, setConvertedAmound]=useState(0);

const currencyInfo=useCurrencyInfo(from);
const options=Object.keys(currencyInfo);


const convert=()=>{
  setConvertedAmound(amount*currencyInfo[to]);
}


  return (
  <div className="main-container">
    <Header/>
    <main className='main'>
    <form onSubmit={(e)=>{
      e.preventDefault()
      convert()
    }}>
      <InputBox
      label="from"
      amount={amount}
      currencyOption={options}
      onAmountChange={(amount)=> setAmount(amount)}
      onCurrencyChange={(from)=> setFrom(from)}
      selectedCurrency={from}
      />
      <InputBox
      label="To"
      amount={convertedAmount}
      currencyOption={options}
      onCurrencyChange={(currency)=> setTo(currency)}
      selectedCurrency={to}
      
      
      />

      <button
      type='submit'>
        Convert

      </button>









    </form>
    </main>
    <Footer/>
  </div>
  )
}

export default App
